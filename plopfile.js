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
      actions: [
        {
          type: 'add',
          path: './src/components/{{name}}.js',
          templateFile: './src/templates/plopTemplate.js.hbs',
        },
      ],
    });
  };