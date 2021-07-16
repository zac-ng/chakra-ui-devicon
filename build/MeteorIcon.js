import { createIcon } from '@chakra-ui/icons';
import { Button, Text } from '@chakra-ui/react';
import { jsx as _jsx } from 'react/jsx-runtime';
const MeteorIcon = createIcon({
	displayName: 'MeteorIcon',
	path: /*#__PURE__*/ _jsx('svg', {
		xmlns: 'http://www.w3.org/2000/svg',
		viewBox: '0 0 128 128',
		children: /*#__PURE__*/ _jsx('path', {
			d: 'M120.3 65.4c1.2 0 2.1-.9 2.1-2.1 0-.5-.2-1-.5-1.3-.1-.2-28-25.8-28-25.8l24.6 28.1c.3.7 1 1.1 1.8 1.1zm5.7 14.3l-.2-.2L65 24l55.7 60.6.2.2c.6.6 1.5 1 2.5 1 2 0 3.6-1.6 3.6-3.6 0-.9-.4-1.8-1-2.5zm-26.9 37.6l-88-81.5 81.1 88.5c.9 1 2.2 1.7 3.7 1.7 2.7 0 4.9-2.2 4.9-4.9 0-1.5-.6-2.9-1.7-3.8zM1 2l107.6 114.6.1.1c.9.9 2.1 1.4 3.4 1.4 2.7 0 4.9-2.2 4.9-4.9 0-1-.3-2-.9-2.8C115.8 109.9 1 2 1 2zm122.4 92.8l-88-81.5 81.1 88.5c.9 1 2.2 1.7 3.7 1.7 2.7 0 4.9-2.2 4.9-4.9 0-1.6-.7-2.9-1.7-3.8zm-42.5 24.8l-.2-.2-60.8-55.5 55.7 60.6.2.2c.6.6 1.5 1 2.5 1 2 0 3.6-1.6 3.6-3.6 0-1-.4-1.8-1-2.5zM34.1 91.7l24.6 28.1c.4.6 1 1.1 1.8 1.1 1.2 0 2.1-.9 2.1-2.1 0-.5-.2-1-.5-1.3-.2-.1-28-25.8-28-25.8z',
			fill: '#DF5052',
		}),
	}),
});

const MeteorIconButton = (props) =>
	/*#__PURE__*/ _jsx(Button, {
		rightIcon: /*#__PURE__*/ _jsx(MeteorIcon, {}),
		colorScheme: 'teal',
		variant: 'solid',
		rounded: 'xl',
		...props,
		children: /*#__PURE__*/ _jsx(Text, {
			marginTop: 1,
			children: 'MeteorIcon',
		}),
	});

export { MeteorIcon, MeteorIconButton };
