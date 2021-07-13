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
        const fs = require('fs');
        const text = fs.readFileSync(data['path']).toString('utf-8');
        // const pathRegex = /(<path).*?(\/>)/g;
        // let result = text.match(pathRegex);
        // console.log("My Result", result)
        // data['path'] = result;
        // const viewboxRegex = /a/g;
        // result = text.match(pathRegex);
        
        // Remove regular expression for xlink href

        let pathRegex = /(<use xlink:href).*?(\/>)/g;
        let result = text.replace(pathRegex, '');
        
        // Remove regular expression for xmlns xlink

        pathRegex = /(xmlns:xlink=").*?(")/g;
        result = result.replace(pathRegex, '');
        data['path'] = result

        actions.push({
          type: 'add',
          path: './src/components/{{name}}.js',
          templateFile: './src/templates/plopTemplate.js.hbs',
        });
        return actions;
      }
      // actions: [
      //   {
      //     type: 'add',
      //     path: './src/components/{{name}}.js',
      //     templateFile: './src/templates/plopTemplate.js.hbs',
      //   },
      // ],
    });
  };