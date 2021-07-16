import { createIcon } from '@chakra-ui/icons';
import { Button, Text } from '@chakra-ui/react';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';
const MatlabIcon = createIcon({
	displayName: 'MatlabIcon',
	path: /*#__PURE__*/ _jsxs('svg', {
		xmlns: 'http://www.w3.org/2000/svg',
		viewBox: '0 0 128 128',
		children: [
			/*#__PURE__*/ _jsxs('defs', {
				children: [
					/*#__PURE__*/ _jsxs('linearGradient', {
						id: 'matlab-original-a',
						gradientUnits: 'userSpaceOnUse',
						x1: '16.803',
						y1: '16.631',
						x2: '15.013',
						y2: '22.411',
						gradientTransform: 'matrix(4 0 0 -4 0 128)',
						children: [
							/*#__PURE__*/ _jsx('stop', {
								offset: '0',
								'stop-color': '#512',
							}),
							/*#__PURE__*/ _jsx('stop', {
								offset: '.23',
								'stop-color': '#523',
							}),
							/*#__PURE__*/ _jsx('stop', {
								offset: '.36',
								'stop-color': '#534',
							}),
							/*#__PURE__*/ _jsx('stop', {
								offset: '.51',
								'stop-color': '#645',
							}),
							/*#__PURE__*/ _jsx('stop', {
								offset: '.66',
								'stop-color': '#568',
							}),
							/*#__PURE__*/ _jsx('stop', {
								offset: '.84',
								'stop-color': '#29d',
							}),
						],
					}),
					/*#__PURE__*/ _jsxs('linearGradient', {
						id: 'matlab-original-b',
						gradientUnits: 'userSpaceOnUse',
						x1: '29.71',
						y1: '18.983',
						x2: '11.71',
						y2: '14.563',
						gradientTransform: 'scale(4)',
						children: [
							/*#__PURE__*/ _jsx('stop', {
								offset: '.081',
								'stop-color': '#c33',
							}),
							/*#__PURE__*/ _jsx('stop', {
								offset: '.189',
								'stop-color': '#de5239',
							}),
							/*#__PURE__*/ _jsx('stop', {
								offset: '.313',
								'stop-color': '#f06e3e',
							}),
							/*#__PURE__*/ _jsx('stop', {
								offset: '.421',
								'stop-color': '#fa8042',
							}),
							/*#__PURE__*/ _jsx('stop', {
								offset: '.5',
								'stop-color': '#fe8643',
							}),
							/*#__PURE__*/ _jsx('stop', {
								offset: '.58',
								'stop-color': '#fa7f42',
							}),
							/*#__PURE__*/ _jsx('stop', {
								offset: '.696',
								'stop-color': '#ef6c3e',
							}),
							/*#__PURE__*/ _jsx('stop', {
								offset: '.833',
								'stop-color': '#dc4c37',
							}),
							/*#__PURE__*/ _jsx('stop', {
								offset: '.916',
								'stop-color': '#cf3633',
							}),
						],
					}),
				],
			}),
			/*#__PURE__*/ _jsx('path', {
				d: 'M8 70.2l31.879-12.88a82.62 82.62 0 0110.883-11.8c2.636-1.399 7.597-.641 16.68-11.918 8.796-11 11.597-20.403 15.718-20.403 6.52 0 11.32 14.082 18.602 35.403A461.75 461.75 0 00120 96.48c-7.602-7.082-14.078-14.718-21.48-14.52-6.88.161-14.52 8.321-22.88 18.802C69 109.16 60.2 114.922 56.763 114.8c0 0-8.883-25.121-16.32-29.2a10.563 10.563 0 00-9.563.797L8 70.16zm0 0',
				fill: '#49d',
			}),
			/*#__PURE__*/ _jsx('path', {
				d: 'M79.2 16.078c-2.68 3.602-5.92 10.203-11.76 17.524-9.082 11.277-14 10.52-16.68 11.918a78.673 78.673 0 00-10.882 11.8l13.2 9.64C64.28 51.68 70.28 35.122 74.96 24.399a54.649 54.649 0 014.238-8.32zm0 0',
				fill: 'url(#matlab-original-a)',
			}),
			/*#__PURE__*/ _jsx('path', {
				d: 'M83.2 13.2c-8.72 0-14.68 45.921-46.88 71.562 9.04-1.48 16.88 20.957 20.48 30.039 16-2.723 28.802-33.32 41.72-32.84 7.402.277 13.878 7.437 21.48 14.52C102.64 60 94.52 13.198 83.2 13.198zm0 0',
				fill: 'url(#matlab-original-b)',
			}),
		],
	}),
});

const MatlabIconButton = (props) =>
	/*#__PURE__*/ _jsx(Button, {
		rightIcon: /*#__PURE__*/ _jsx(MatlabIcon, {}),
		colorScheme: 'teal',
		variant: 'solid',
		rounded: 'xl',
		...props,
		children: /*#__PURE__*/ _jsx(Text, {
			marginTop: 1,
			children: 'MatlabIcon',
		}),
	});

export { MatlabIcon, MatlabIconButton };
