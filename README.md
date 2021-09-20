# Chakra UI Devicons

This package contains components for custom icons from the [devicon](https://github.com/devicons/devicon/) library. The library creates Icon components for use in Chakra UI projects. Feel free to fork this to create your own icons for other React packages.

This package uses plop.js to autogenerate icon components for Chakra UI. The individual components are contained with the components folder, and can be imported through the module.

## Installation

To install Chakra UI Devicons run:

```
npm i chakra-ui-devicon
```

To rebuild run the bash script in src/scripts

```
./generateComponents.sh
```

## Importing

To import an icon (such as React.js) run the following:

```
import { ReactIcon } from 'chakra-ui-devicon'
```

## Deprecated

To import the button run the following:

```
import { ReactIconButton } from 'chakra-ui-devicon'
```

The button can be styled using any Chakra UI props.

```
<ReactIconButton variant='outline'/>
```
