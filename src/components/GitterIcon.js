import { createIcon } from '@chakra-ui/icons';
import { Button, Text } from '@chakra-ui/react';

const GitterIcon = createIcon({
	displayName: 'GitterIcon',
	path: (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
			<path d="M96.8 25.6H107v51.2H96.8zM71.2 25.6h10.2V128H71.2zM45.6 25.6h10.2V128H45.6zM20 0h10.2v76.8H20z" />
		</svg>
	),
});

const GitterIconButton = (props) => (
	<Button
		rightIcon={<GitterIcon />}
		colorScheme="teal"
		variant="solid"
		rounded="xl"
		{...props}>
		<Text marginTop={1}>GitterIcon</Text>
	</Button>
);

export { GitterIcon, GitterIconButton };
