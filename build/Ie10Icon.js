import { createIcon } from '@chakra-ui/icons';
import { Button, Text } from '@chakra-ui/react';
import { jsx as _jsx } from 'react/jsx-runtime';
const Ie10Icon = createIcon({
	displayName: 'Ie10Icon',
	path: /*#__PURE__*/ _jsx('svg', {
		xmlns: 'http://www.w3.org/2000/svg',
		viewBox: '0 0 128 128',
		children: /*#__PURE__*/ _jsx('path', {
			fill: '#1EBBEE',
			d: 'M126.11 66.834c0-9.82-2.539-19.034-6.991-27.051C138.097-3.167 98.785 3.13 96.596 3.558c-8.328 1.629-16.034 4.249-23.142 7.566a56.276 56.276 0 00-3.166-.09c-26.525 0-48.729 18.501-54.411 43.303 13.98-15.684 23.765-22.012 29.624-24.544-.936.835-1.851 1.681-2.751 2.532l-.885.855c-.594.571-1.186 1.143-1.765 1.72-.344.343-.68.689-1.019 1.035-.514.522-1.026 1.044-1.527 1.569l-1.052 1.122c-.468.501-.934 1.003-1.39 1.506l-1.053 1.175a143.278 143.278 0 00-3.516 4.099c-.347.419-.692.838-1.031 1.256-.367.453-.726.905-1.083 1.356-.348.438-.695.875-1.034 1.312l-.953 1.246c-.356.469-.715.938-1.063 1.404l-.731.998a173.801 173.801 0 00-6.041 8.796l-.013.021c-.479.747-.941 1.482-1.395 2.211l-.074.12c-.454.732-.892 1.451-1.319 2.164l-.045.075a181.942 181.942 0 00-3.172 5.501C7.562 80.977 5.114 87.343 5.008 87.72c-15.876 56.759 33.674 32.791 40.588 29.213 7.445 3.678 15.827 5.973 24.692 5.973C94.563 122.905 115.213 107 122.9 86H93.569c-4.34 7-12.694 12.049-22.293 12.049C57.211 98.049 45.81 87 45.81 74h79.842c.303-2 .458-4.73.458-7.166zM13.526 116.817c-3.916-4.015-4.608-13.795 4.032-31.616 4.36 12.537 13.061 23.041 24.307 29.708-5.593 3.079-20.441 10.009-28.339 1.908zM45.687 59c.446-13 11.564-23.005 25.226-23.005C84.574 35.995 95.694 46 96.14 59H45.687zm44.776-44.204c5.166-2.495 17.958-7.771 25.22-2.871 4.807 3.245 8.663 8.34 2.042 25.499-6.351-10.213-15.905-18.224-27.262-22.628z',
		}),
	}),
});

const Ie10IconButton = (props) =>
	/*#__PURE__*/ _jsx(Button, {
		rightIcon: /*#__PURE__*/ _jsx(Ie10Icon, {}),
		colorScheme: 'teal',
		variant: 'solid',
		rounded: 'xl',
		...props,
		children: /*#__PURE__*/ _jsx(Text, {
			marginTop: 1,
			children: 'Ie10Icon',
		}),
	});

export { Ie10Icon, Ie10IconButton };
