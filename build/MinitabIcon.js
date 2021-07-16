import { createIcon } from '@chakra-ui/icons';
import { Button, Text } from '@chakra-ui/react';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
const MinitabIcon = createIcon({
	displayName: 'MinitabIcon',
	path: /*#__PURE__*/ _jsxs('svg', {
		xmlns: 'http://www.w3.org/2000/svg',
		viewBox: '0 0 128 128',
		children: [
			/*#__PURE__*/ _jsx('path', {
				fill: '#8DC63F',
				d: 'M0 0h128v128H0z',
			}),
			/*#__PURE__*/ _jsxs('linearGradient', {
				id: 'minitab-original-a',
				gradientUnits: 'userSpaceOnUse',
				x1: '99.32',
				y1: '-254.43',
				x2: '21.21',
				y2: '-332.79',
				gradientTransform: 'translate(0 374)',
				children: [
					/*#__PURE__*/ _jsx('stop', {
						offset: '0',
						'stop-color': '#8DC63F',
						'stop-opacity': '.2',
					}),
					/*#__PURE__*/ _jsx('stop', {
						offset: '1',
						'stop-opacity': '.2',
					}),
				],
			}),
			/*#__PURE__*/ _jsx('path', {
				fill: 'url(#minitab-original-a)',
				d: 'M41 128l-26.2-21.7 19.8-53.9 19.2 17.9V19.4h7.9l21 23.5 6.1-5.3L113.9 70l2.1-1.5 12 16.1v43.2z',
			}),
			/*#__PURE__*/ _jsx('path', {
				fill: '#FFF',
				d: 'M42 19.4h19.7v86.9H42zM69.1 37.6h19.7v68.7H69.1zM96.3 68.5H116v37.8H96.3zM14.8 52.4h19.7v53.9H14.8z',
			}),
			/*#__PURE__*/ _jsx('path', {
				fill: '#D1D1D2',
				d: 'M14.8 100.3l19.8-7.4v13.4H14.8zM61.7 71.9v34.4H42V89.1zM69.1 71.9l19.7 14.5v19.9H69.1zM96.3 86.2l19.7-7.6v27.7H96.3z',
			}),
		],
	}),
});

const MinitabIconButton = (props) =>
	/*#__PURE__*/ _jsx(Button, {
		rightIcon: /*#__PURE__*/ _jsx(MinitabIcon, {}),
		colorScheme: 'teal',
		variant: 'solid',
		rounded: 'xl',
		...props,
		children: /*#__PURE__*/ _jsx(Text, {
			marginTop: 1,
			children: 'MinitabIcon',
		}),
	});

export { MinitabIcon, MinitabIconButton };
