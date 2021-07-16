const fs = require('fs');

module.exports = (plop) => {
	plop.setGenerator('component', {
		description: 'Create Icon Component',
		// User input prompts provided as arguments to the template
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'What is the name of your component?',
			},
			{
				type: 'input',
				name: 'path',
				message: 'What is the svg path?',
			},
		],
		actions: (data) => {
			let actions = [];
			const text = fs.readFileSync(data['path']).toString('utf-8');

			// Regular expressions for converting xlink xmlns and xml to pascalCase
			// Remove style parameter (incompatible with react) can be remapped manually

			let pathRegex = /(xlink:href)/g;
			let result = text.replace(pathRegex, 'xlinkHref');

			pathRegex = /(xmlns:xlink)/g;
			result = result.replace(pathRegex, 'xmlnsXlink');

			pathRegex = /(xml:space)/g;
			result = result.replace(pathRegex, 'xmlnsSpace');

			pathRegex = /(style=").*?(\")/g;
			result = result.replace(pathRegex, '');
			data['path'] = result;

			actions.push({
				type: 'add',
				path: './src/components/{{pascalCase name}}.js',
				templateFile: './src/templates/componentTemplate.js.hbs',
			});
			return actions;
		},
	});
	plop.setGenerator('index', {
		description: 'Create Index File',
		prompts: [],
		actions: (data) => {
			//  Delete previous Index.js

			fs.rmSync('./index.js', {
				force: true,
			});

			let actions = [];
			components = [];

			fs.readdirSync('./build').forEach((file) => {
				components.push(file.slice(0, -3));
			});
			data['files'] = components;
			actions.push({
				type: 'add',
				path: './index.js',
				templateFile: './src/templates/indexTemplate.js.hbs',
			});
			return actions;
		},
	});
};
