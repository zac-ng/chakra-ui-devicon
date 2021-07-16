import { createIcon } from '@chakra-ui/icons';
import { Button, Text } from '@chakra-ui/react';

const AppceleratorIcon = createIcon({
	displayName: 'AppceleratorIcon',
	path: (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
			<path
				fill="#AC162C"
				d="M125.477 111.872L67.719 11.834a4.29 4.29 0 00-7.434 0L2.523 111.872c-.77 1.328-.77 2.81 0 4.141.769 1.328 2.185 1.987 3.718 1.987h115.521c1.534 0 2.945-.659 3.715-1.987.77-1.331.77-2.813 0-4.141zm-36.748-8.075l.155-4.336-16.666 2.944-.758-.699.215-5.706h-.435s-4.567 7.553-14.682 7.553c-7.503 0-14.572-3-14.572-15.176C41.986 76.083 51.228 72 60.908 72H71v-5.052c0-4.895-3.252-7.721-9.343-7.721-6.852 0-15.006 1.087-15.006 1.087L46 59.552v-8.265s8.751-1.086 17.784-1.086C72.049 50.201 82 52.376 82 64.556v28.027l5.625-1.056-1.555-4.057 13.907 6.094-11.248 10.233zM52.534 87.56c0 5.655 3.903 6.879 7.708 6.879 3.59 0 7.758-.954 10.758-5.413V80h-7.262c-7.4 0-11.204 1.686-11.204 7.56z"
			/>
		</svg>
	),
});

const AppceleratorIconButton = (props) => (
	<Button
		rightIcon={<AppceleratorIcon />}
		colorScheme="teal"
		variant="solid"
		rounded="xl"
		{...props}>
		<Text marginTop={1}>AppceleratorIcon</Text>
	</Button>
);

export { AppceleratorIcon, AppceleratorIconButton };
