import { createIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";

const Windows8Icon = createIcon({
  displayName: "Windows8Icon",
  path: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#00ADEF" d="M126 1.637l-67 9.834v49.831l67-.534zM1.647 66.709l.003 42.404 50.791 6.983-.04-49.057zm56.82.68l.094 49.465 67.376 9.509.016-58.863zM1.61 19.297l.047 42.383 50.791-.289-.023-49.016z"/></svg>)
})

const Windows8IconButton = (props) => (
  <Button rightIcon={<Windows8Icon />} colorScheme='teal' variant="solid" rounded="xl" {...props}>
    <Text marginTop={1}>Windows8Icon</Text>
  </Button>
);

export { Windows8Icon,  Windows8IconButton }