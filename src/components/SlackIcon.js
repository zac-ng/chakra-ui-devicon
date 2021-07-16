import { createIcon } from '@chakra-ui/icons';
import { Button, Text } from '@chakra-ui/react';

const SlackIcon = createIcon({
	displayName: 'SlackIcon',
	path: (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
			<path
				fill="#80cade"
				d="M12.81 67.6a10.2 10.2 0 01-9.94-7c-.06-.17-.1-.33-.15-.49a10.69 10.69 0 016.92-13.04L97 17.8a11.82 11.82 0 013.19-.47 10.47 10.47 0 0110.21 7.14l.13.42c1.63 5.71-2.43 10.81-7.29 12.44L16.36 67a11.3 11.3 0 01-3.55.6z"
			/>
			<path
				fill="#db015c"
				d="M27.37 110.55a10.19 10.19 0 01-10-6.89c-.05-.16-.1-.32-.15-.49A10.76 10.76 0 0124.16 90l87.34-29.54a11.24 11.24 0 013.47-.58A10.55 10.55 0 01125.15 67l.13.44a11.05 11.05 0 01-1.28 8.84c-1.25 1.95-5.19 3.66-5.19 3.66l-87.68 30a12 12 0 01-3.71.63z"
			/>
			<path
				fill="#e8a900"
				d="M100.08 110.74a10.72 10.72 0 01-10.27-7.31L60.66 16.84l-.15-.49A10.74 10.74 0 0181 10l29.15 86.58.08.28a10.73 10.73 0 01-10.17 13.89z"
			/>
			<path
				fill="#41b088"
				d="M56.75 125.33A10.73 10.73 0 0146.48 118L17.33 31.43l-.15-.48a10.72 10.72 0 016.9-13.12 10.89 10.89 0 013.34-.56 10.72 10.72 0 0110.27 7.31l29.14 86.59c.05.15.1.32.15.48a10.73 10.73 0 01-10.23 13.68z"
			/>
			<path
				fill="#ca161a"
				d="M85.71 91.24L106 84.29l-6.61-19.73L79 71.44z"
			/>
			<path
				fill="#3b1d37"
				d="M42.45 106l20.32-6.95-6.69-19.85-20.35 6.88z"
			/>
			<path
				fill="#69852c"
				d="M71.24 48.26l20.33-6.94L85 21.82l-20.36 6.82z"
			/>
			<path
				fill="#118f79"
				d="M28 63l20.3-6.91-6.65-19.75-20.36 6.82L28 63z"
			/>
		</svg>
	),
});

const SlackIconButton = (props) => (
	<Button
		rightIcon={<SlackIcon />}
		colorScheme="teal"
		variant="solid"
		rounded="xl"
		{...props}>
		<Text marginTop={1}>SlackIcon</Text>
	</Button>
);

export { SlackIcon, SlackIconButton };
