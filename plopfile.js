const fs = require('fs');

function MyConfirmPluginConstructor() {
  // ...your main plugin code
  this.bypass = (rawValue, promptConfig) => {
      const lowerVal = rawValue.toString().toLowerCase();
      const trueValues = ['t', 'true', 'y', 'yes'];
      const falseValues = ['f', 'false', 'n', 'no'];
      if (trueValues.includes(lowerVal)) return true;
      if (falseValues.includes(lowerVal)) return false;
      throw Error(`"${rawValue}" is not a valid ${promptConfig.type} value`);
  };
  return this;
}


module.exports = plop => {
    plop.setGenerator('component', {
      description: 'Create Icon Component',
      // User input prompts provided as arguments to the template
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of your component?'
        },
        {
          type: 'input',
          name: 'path',
          message: 'What is the svg path?'
        }
      ],
      actions: data => {
        let actions = []        
        const text = fs.readFileSync(data['path']).toString('utf-8');

        // Remove regular expression for xlink href

        let pathRegex = /(<use xlink:href).*?(\/>)/g;
        let result = text.replace(pathRegex, '');
        
        // Remove regular expression for xmlns xlink

        pathRegex = /(xmlns:xlink=").*?(")/g;
        result = result.replace(pathRegex, '');
        data['path'] = result

        actions.push({
          type: 'add',
          path: './src/components/{{pascalCase name}}.js',
          templateFile: './src/templates/componentTemplate.js.hbs',
        });
        return actions;
      }
    });
    plop.setGenerator('index', {
      description: 'Create Index File',
      prompts: [
      ],
      actions: data => {
        
        //  Delete previous Index.js

        fs.rmSync("./index.js", {
          force: true,
        });

        let actions = [];
        components = [];

        fs.readdirSync('./build').forEach(file => {
          components.push(file.slice(0,-3));
        });
        data['files'] = components
        actions.push({
          type: 'add',
          path: './index.js',
          templateFile: './src/templates/indexTemplate.js.hbs',
        });
        return actions;
      }
    });
  };