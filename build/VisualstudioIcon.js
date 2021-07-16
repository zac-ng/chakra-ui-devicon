import { createIcon } from '@chakra-ui/icons';
import { Button, Text } from '@chakra-ui/react';
import { jsx as _jsx } from 'react/jsx-runtime';
const VisualstudioIcon = createIcon({
	displayName: 'VisualstudioIcon',
	path: /*#__PURE__*/ _jsx('svg', {
		xmlns: 'http://www.w3.org/2000/svg',
		viewBox: '0 0 128 128',
		children: /*#__PURE__*/ _jsx('path', {
			fill: '#68217a',
			d: 'M95 2.3l30.5 12.3v98.7l-30.7 12.4-49-48.7-31 24.1-12.3-6.2V33.1l12.3-5.9 31 24.3zM14.8 45.7v37.5l18.5-19zm48.1 18.5l31.9 25.1V39z',
		}),
	}),
});

const VisualstudioIconButton = (props) =>
	/*#__PURE__*/ _jsx(Button, {
		rightIcon: /*#__PURE__*/ _jsx(VisualstudioIcon, {}),
		colorScheme: 'teal',
		variant: 'solid',
		rounded: 'xl',
		...props,
		children: /*#__PURE__*/ _jsx(Text, {
			marginTop: 1,
			children: 'VisualstudioIcon',
		}),
	});

export { VisualstudioIcon, VisualstudioIconButton };
