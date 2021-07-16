import { createIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";

const CircleciIcon = createIcon({
  displayName: "CircleciIcon",
  path: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#343434" d="M47.809 64c0-8.45 6.847-15.23 15.23-15.23 8.387 0 15.234 6.847 15.234 15.23S71.426 79.23 63.04 79.23c-8.383 0-15.23-6.847-15.23-15.23zm15.23-64C33.152 0 8.13 20.48 1.023 48.129c-.062.191-.062.383-.062.64a3.07 3.07 0 003.07 3.07h25.793c1.215 0 2.305-.702 2.75-1.792 5.313-11.52 16.961-19.582 30.465-19.582 18.496 0 33.535 15.039 33.535 33.535 0 18.496-15.039 33.535-33.535 33.535-13.504 0-25.152-8-30.465-19.582-.511-1.023-1.535-1.793-2.75-1.793H4.031a3.07 3.07 0 00-3.07 3.07c0 .196.062.387.062.641C8.063 107.52 33.153 128 63.04 128c35.328 0 64-28.672 64-64s-28.672-64-64-64zm0 0"/></svg>)
})

const CircleciIconButton = (props) => (
  <Button rightIcon={<CircleciIcon />} colorScheme='teal' variant="solid" rounded="xl" {...props}>
    <Text marginTop={1}>CircleciIcon</Text>
  </Button>
);

export { CircleciIcon,  CircleciIconButton }