import { createIcon } from '@chakra-ui/icons';
import { Button, Text } from '@chakra-ui/react';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
const CIcon = createIcon({
	displayName: 'CIcon',
	path: /*#__PURE__*/ _jsxs('svg', {
		xmlns: 'http://www.w3.org/2000/svg',
		viewBox: '0 0 128 128',
		children: [
			/*#__PURE__*/ _jsx('path', {
				fill: '#659AD3',
				d: 'M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z',
			}),
			/*#__PURE__*/ _jsx('path', {
				fill: '#03599C',
				d: 'M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z',
			}),
			/*#__PURE__*/ _jsx('path', {
				fill: '#fff',
				d: 'M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z',
			}),
		],
	}),
});

const CIconButton = (props) =>
	/*#__PURE__*/ _jsx(Button, {
		rightIcon: /*#__PURE__*/ _jsx(CIcon, {}),
		colorScheme: 'teal',
		variant: 'solid',
		rounded: 'xl',
		...props,
		children: /*#__PURE__*/ _jsx(Text, {
			marginTop: 1,
			children: 'CIcon',
		}),
	});

export { CIcon, CIconButton };
