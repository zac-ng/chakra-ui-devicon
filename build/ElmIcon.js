import { createIcon } from '@chakra-ui/icons';
import { Button, Text } from '@chakra-ui/react';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
const ElmIcon = createIcon({
	displayName: 'ElmIcon',
	path: /*#__PURE__*/ _jsxs('svg', {
		xmlns: 'http://www.w3.org/2000/svg',
		viewBox: '0 0 128 128',
		children: [
			/*#__PURE__*/ _jsx('path', {
				fill: '#efa500',
				d: 'M64 60.74l25.65-25.65h-51.3L64 60.74z',
			}),
			/*#__PURE__*/ _jsx('path', {
				fill: '#8dd737',
				d: 'M7.91 4.65l25.83 25.84h56.17L64.07 4.65H7.91zM67.263 63.993l28.08-28.08 27.951 27.953-28.08 28.079z',
			}),
			/*#__PURE__*/ _jsx('path', {
				fill: '#60b5cc',
				d: 'M123.35 57.42V4.65H70.58l52.77 52.77z',
			}),
			/*#__PURE__*/ _jsx('path', {
				fill: '#34495e',
				d: 'M60.74 64L4.65 7.91V120.1L60.74 64z',
			}),
			/*#__PURE__*/ _jsx('path', {
				fill: '#efa500',
				d: 'M98.47 95.21l24.88 24.89V70.33L98.47 95.21z',
			}),
			/*#__PURE__*/ _jsx('path', {
				fill: '#60b5cc',
				d: 'M64 67.26L7.91 123.35h112.18L64 67.26z',
			}),
		],
	}),
});

const ElmIconButton = (props) =>
	/*#__PURE__*/ _jsx(Button, {
		rightIcon: /*#__PURE__*/ _jsx(ElmIcon, {}),
		colorScheme: 'teal',
		variant: 'solid',
		rounded: 'xl',
		...props,
		children: /*#__PURE__*/ _jsx(Text, {
			marginTop: 1,
			children: 'ElmIcon',
		}),
	});

export { ElmIcon, ElmIconButton };
