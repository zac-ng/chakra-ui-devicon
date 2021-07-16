import { createIcon } from '@chakra-ui/icons';
import { Button, Text } from '@chakra-ui/react';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
const ShopwareIcon = createIcon({
	displayName: 'ShopwareIcon',
	path: /*#__PURE__*/ _jsx('svg', {
		xmlns: 'http://www.w3.org/2000/svg',
		viewBox: '0 0 128 128',
		children: /*#__PURE__*/ _jsxs('g', {
			fill: '#179EFF',
			children: [
				/*#__PURE__*/ _jsx('path', {
					d: 'M99.85 115.41c-9.96 6.89-21.99 10.97-34.98 11.11-34.14.37-62.64-27.08-63.49-61.22C.5 29.87 28.95.88 64.18.88c15.81 0 30.25 5.84 41.28 15.47 1 .87.27 2.5-1.04 2.35-22.07-2.59-43.67-.18-57.34 10.43C31.3 41.38 29.8 59.97 38.9 76.34c12.84 23.1 41.28 23.33 60.95 36.82.79.54.79 1.71 0 2.25z',
				}),
				/*#__PURE__*/ _jsx('path', {
					d: 'M127 63.7c0 8.54-1.7 16.68-4.79 24.1-15.81-8.45-32.64-14.21-40.19-17.03-8.92-3.35-16.73-12.65-11.52-20.82s18.21-9.66 34.2-5.58c6.82 1.75 13.13 6.22 18.88 11.55 2.15 2 3.42 4.79 3.43 7.73-.01.02-.01.03-.01.05z',
				}),
			],
		}),
	}),
});

const ShopwareIconButton = (props) =>
	/*#__PURE__*/ _jsx(Button, {
		rightIcon: /*#__PURE__*/ _jsx(ShopwareIcon, {}),
		colorScheme: 'teal',
		variant: 'solid',
		rounded: 'xl',
		...props,
		children: /*#__PURE__*/ _jsx(Text, {
			marginTop: 1,
			children: 'ShopwareIcon',
		}),
	});

export { ShopwareIcon, ShopwareIconButton };
