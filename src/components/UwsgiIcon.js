import { createIcon } from '@chakra-ui/icons';
import { Button, Text } from '@chakra-ui/react';

const UwsgiIcon = createIcon({
	displayName: 'UwsgiIcon',
	path: (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
			<rect fill="none" />
			<path
				fill="#bad05e"
				d="M8.884 80.638c-2.2-.6-3.6-2.2-4.4-5.1-.3-1.2-.4-1.7-.4-10.2l-.1-8.9h5.6v7.2c0 4.2.1 7.8.2 8.5.4 2.7 1.5 4.1 3.3 4.1 1.7 0 2.9-1.3 3.7-4.1.2-.9.3-2 .4-8.4l.1-7.4h5.6v11.3c0 6.2 0 11.6.1 11.9l.1 1.2h-5.5l-.1-1.4c0-.5-.1-1.5-.1-2.3v-1.4l-.7 1.4c-.4.8-1 1.7-1.3 2-1.5 1.6-4.2 2.2-6.5 1.6z"
			/>
			<path
				fill="#010101"
				d="M72.484 80.638c-4.5-.7-7.1-2.9-8.4-7-.3-1-.4-1.8-.2-1.8 0 0 1.2-.2 2.6-.4 1.4-.2 2.6-.4 2.7-.5.1 0 .3.3.5.8.5 2 1.4 3.1 2.9 3.8 1 .5 3.6.5 4.8.1 1-.4 2-1.5 2.3-2.5.3-1.2.2-2.9-.2-3.8-.7-1.6-1.7-2.2-5.9-3.6-3.8-1.2-4.8-1.8-6.2-3.1-1.8-1.8-2.6-4.3-2.4-7.2.3-4.4 2.6-7.1 6.7-8 1.7-.4 5.3-.4 6.8 0 2.6.6 4.2 1.8 5.3 3.9.7 1.3 1.3 3.5 1.2 3.7-.1.1-4.9.9-5.5.9l-.4-1c-.4-1.4-1-2.3-2-2.8-.6-.4-1-.4-2.2-.4-2.4 0-3.6.9-4.1 3-.4 2.1.3 3.9 1.9 4.8.5.3 2.3 1 4 1.5 3.7 1.2 5.1 1.9 6.4 3.2 1.1 1.1 2.1 2.9 2.3 4.4.2 1.3.2 3.8-.1 5.2-.7 3.5-3.2 5.9-6.8 6.7-1.4.2-4.7.4-6 .1zM99.684 80.738c-4.1-.6-7.2-3.3-8.8-7.7-1.6-4.2-2-10.5-.8-15.8 1.1-5.3 4.1-8.8 8.4-9.9 1.5-.4 4.5-.4 5.8 0 3 .8 5.4 2.8 6.8 5.9 1 2 1.1 1.8-1.7 2.8-1.4.5-2.6.9-2.7.9s-.3-.3-.4-.6c-.6-1.8-1.8-3.3-3.2-3.9-1.1-.5-2.9-.4-3.9.1-2.6 1.3-3.8 5-3.8 11.2 0 4.5.6 7.4 2 9.6 1.2 1.9 2.5 2.5 4.7 2.4 1.7-.1 3-.7 4.2-1.8l.8-.8v-5.4h-5.6v-4.4h11.2v11.8l-.7.8c-1.6 2.1-4.3 3.8-6.9 4.4-1.5.4-4.1.6-5.4.4z"
			/>
			<path d="M29.484 64.438c-1.8-8.8-3.5-16.2-3.5-16.4l-.1-.9h5.9c.1 0 .8 4.9 1.8 10.2 1 5.3 2.1 11.4 2.4 13.5.3 2.1.6 3.9.6 3.9l6.5-23.2h2.6l6.7 23.1c0 .1.3-1.3.5-2.9s1.3-7.7 2.4-13.5l2-11.1h6l-.1.9c0 .3-1.6 7.6-3.5 16.3-1.9 8.7-3.3 16.6-3.4 16.6h-7.2l-4.7-17.8-4.5 17.8h-7.1l-3.3-16.5z" />
			<path
				fill="#010101"
				d="M118.084 63.938v-16.8h5.9v33.7h-5.9v-16.9z"
			/>
			<path
				fill="#bad05e"
				d="M83.402 52.726a2.09 2.09 0 01-2.083 2.083 2.09 2.09 0 01-2.083-2.083 2.09 2.09 0 012.083-2.084c1.125-.041 2.083.917 2.083 2.084z"
			/>
			<path
				fill="#010101"
				d="M82.194 52.726c0 .5-.375.875-.875.875s-.875-.375-.875-.875.375-.875.875-.875a.88.88 0 01.875.875z"
			/>
		</svg>
	),
});

const UwsgiIconButton = (props) => (
	<Button
		rightIcon={<UwsgiIcon />}
		colorScheme="teal"
		variant="solid"
		rounded="xl"
		{...props}>
		<Text marginTop={1}>UwsgiIcon</Text>
	</Button>
);

export { UwsgiIcon, UwsgiIconButton };
