import { createIcon } from '@chakra-ui/icons';
import { Button, Text } from '@chakra-ui/react';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
const ModxIcon = createIcon({
	displayName: 'ModxIcon',
	path: /*#__PURE__*/ _jsxs('svg', {
		xmlns: 'http://www.w3.org/2000/svg',
		viewBox: '0 0 128 128',
		children: [
			/*#__PURE__*/ _jsx('path', {
				fill: '#00b5de',
				d: 'M63.864 14.059l-8.29 13.317 43.215 26.5 24.869-39.817z',
			}),
			/*#__PURE__*/ _jsx('path', {
				class: 'modx-original-st2',
				fill: '#ff5529',
				d: 'M99.06 58.089l-27.178 42.806L111.97 125.9V66.106z',
			}),
			/*#__PURE__*/ _jsx('path', {
				class: 'modx-original-st3',
				fill: '#00decc',
				d: 'M29.483 69.911l69.306-16.035L15.622 2.1v59.794z',
			}),
			/*#__PURE__*/ _jsx('path', {
				class: 'modx-original-st4',
				fill: '#ff9640',
				d: 'M64.136 113.67L99.06 58.088 29.21 74.532 4.342 113.669z',
			}),
		],
	}),
});

const ModxIconButton = (props) =>
	/*#__PURE__*/ _jsx(Button, {
		rightIcon: /*#__PURE__*/ _jsx(ModxIcon, {}),
		colorScheme: 'teal',
		variant: 'solid',
		rounded: 'xl',
		...props,
		children: /*#__PURE__*/ _jsx(Text, {
			marginTop: 1,
			children: 'ModxIcon',
		}),
	});

export { ModxIcon, ModxIconButton };
