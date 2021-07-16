import { createIcon } from '@chakra-ui/icons';
import { Button, Text } from '@chakra-ui/react';

const HaxeIcon = createIcon({
	displayName: 'HaxeIcon',
	path: (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
			<path fill="#F6B214" d="M15.7 64l48.4-48.4L0 0z" />
			<path fill="#F17321" d="M64 15.7l48.4 48.4L128 0z" />
			<path fill="#EF5E21" d="M112.3 64l-48.4 48.4L128 128z" />
			<path fill="#F6B214" d="M64 112.3L15.6 63.9 0 128z" />
			<path fill="#EA8220" d="M15.6 63.9L64 15.7 112.3 64 64 112.3z" />
			<path fill="#F8EF23" d="M15.6 63.9L0 32V0zM0 128V96l15.6-32.1z" />
			<path fill="#F8C713" d="M0 0h32l32 15.7zM128 0L64 15.7 96 0z" />
			<path fill="#EC4822" d="M112.3 64L128 0v32zM128 128V96l-15.7-32z" />
			<path fill="#EF5E21" d="M0 128l64-15.7L32 128z" />
			<path fill="#EA8220" d="M128 128H96l-32-15.7z" />
		</svg>
	),
});

const HaxeIconButton = (props) => (
	<Button
		rightIcon={<HaxeIcon />}
		colorScheme="teal"
		variant="solid"
		rounded="xl"
		{...props}>
		<Text marginTop={1}>HaxeIcon</Text>
	</Button>
);

export { HaxeIcon, HaxeIconButton };
