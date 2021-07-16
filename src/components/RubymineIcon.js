import { createIcon } from '@chakra-ui/icons';
import { Button, Text } from '@chakra-ui/react';

const RubymineIcon = createIcon({
	displayName: 'RubymineIcon',
	path: (
		<svg
			data-name="ruby mine"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 128 128">
			<path
				fill="#c12c4c"
				d="M122.19 97.45c-1.28-2-13.17-18.24-14.14-20.19l-.35-.69.64-.46a38.51 38.51 0 0016.33-31.41v-1.06c0-8.69-3-17-8.34-22.77-6.2-6.76-15.11-10.73-25.33-11.47v25.14c5.37 1.54 9 6.52 9 13 0 7.4-5.73 11.34-10.54 14.19l-1.91 1.16a13.63 13.63 0 00-6.49 11.89 20.74 20.74 0 001.85 8.27l1.7 2.95 17.44 25 .28.43 2.35 3.42a10.44 10.44 0 006 3.88 12.94 12.94 0 0010-1.79 10.83 10.83 0 004.91-7.37l.21-2.08a18.65 18.65 0 00-3.61-10.04z"
			/>
			<path
				fill="#fa930d"
				d="M85.39 9.14A37.23 37.23 0 0076.28 11c-.26.09-.51.21-.77.3-.89.32-1.76.65-2.62 1-.33.15-.65.33-1 .49-.85.42-1.72.8-2.54 1.28a36.86 36.86 0 00-5.76 4.14A37 37 0 002.15 46a.61.61 0 000 .12v70.78h25.19V46.15a.78.78 0 010-.12A11.82 11.82 0 0151 45.92V46a.63.63 0 000 .12v70.78h25.2V46.14v-.08-.1a8.8 8.8 0 01.1-.92v-.64a11.75 11.75 0 019.06-9.85V9.14z"
			/>
		</svg>
	),
});

const RubymineIconButton = (props) => (
	<Button
		rightIcon={<RubymineIcon />}
		colorScheme="teal"
		variant="solid"
		rounded="xl"
		{...props}>
		<Text marginTop={1}>RubymineIcon</Text>
	</Button>
);

export { RubymineIcon, RubymineIconButton };
