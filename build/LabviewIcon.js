import { createIcon } from '@chakra-ui/icons';
import { Button, Text } from '@chakra-ui/react';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
const LabviewIcon = createIcon({
	displayName: 'LabviewIcon',
	path: /*#__PURE__*/ _jsxs('svg', {
		xmlns: 'http://www.w3.org/2000/svg',
		viewBox: '0 0 128 128',
		children: [
			/*#__PURE__*/ _jsx('path', {
				d: 'M105.085 59.84a3.54 3.54 0 00-3.54 3.54v1.34a3.54 3.54 0 003.54 3.54h19.38a3.54 3.54 0 003.54-3.54v-1.34a3.54 3.54 0 00-3.54-3.54zM3.535 41.8a3.54 3.54 0 00-3.54 3.54v1.35a3.54 3.54 0 003.54 3.54h19.38a3.54 3.54 0 003.54-3.54v-1.35a3.54 3.54 0 00-3.54-3.54zM3.535 77.87a3.54 3.54 0 00-3.54 3.54v1.34a3.54 3.54 0 003.54 3.54h19.38a3.54 3.54 0 003.54-3.54v-1.34a3.54 3.54 0 00-3.54-3.54z',
				opacity: '.998',
				fill: '#bec7cc',
			}),
			/*#__PURE__*/ _jsx('path', {
				d: 'M29.755 22.46c-4.42-.09-8.06 2.99-8.06 6.82v69.43c0 5.25 6.56 8.53 11.81 5.91l69.49-34.72c5.25-2.62 5.25-9.18 0-11.8l-69.49-34.72a8.856 8.856 0 00-3.75-.91z',
				opacity: '.998',
				fill: '#ffd500',
			}),
			/*#__PURE__*/ _jsx('path', {
				d: 'M64.535 67.07h-11.95v11.99h-6.15V67.08h-11.95V61h11.95V49.02h6.15v11.99h11.95z',
				opacity: '.998',
				fill: '#727b84',
			}),
		],
	}),
});

const LabviewIconButton = (props) =>
	/*#__PURE__*/ _jsx(Button, {
		rightIcon: /*#__PURE__*/ _jsx(LabviewIcon, {}),
		colorScheme: 'teal',
		variant: 'solid',
		rounded: 'xl',
		...props,
		children: /*#__PURE__*/ _jsx(Text, {
			marginTop: 1,
			children: 'LabviewIcon',
		}),
	});

export { LabviewIcon, LabviewIconButton };
