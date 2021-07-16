import { createIcon } from '@chakra-ui/icons';
import { Button, Text } from '@chakra-ui/react';

const FsharpIcon = createIcon({
	displayName: 'FsharpIcon',
	path: (
		<svg
			version="1.2"
			baseProfile="tiny"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 128 128"
			overflow="visible">
			<path
				fill="#378BBA"
				d="M0 64.5L60.7 3.8v30.4L30.4 64.5l30.4 30.4v30.4L0 64.5z"
			/>
			<path fill="#378BBA" d="M39.1 64.5l21.7-21.7v43.4L39.1 64.5z" />
			<path
				fill="#30B9DB"
				d="M128 64.5L65.1 3.8v30.4l30.4 30.4-30.4 30.3v30.4L128 64.5z"
			/>
		</svg>
	),
});

const FsharpIconButton = (props) => (
	<Button
		rightIcon={<FsharpIcon />}
		colorScheme="teal"
		variant="solid"
		rounded="xl"
		{...props}>
		<Text marginTop={1}>FsharpIcon</Text>
	</Button>
);

export { FsharpIcon, FsharpIconButton };
