import { createIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";

const XdIcon = createIcon({
  displayName: "XdIcon",
  path: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#DD80BC" d="M126.2.7H2.1C1.7.7 1 .9 1 1v126h126V1c0-.1-.4-.3-.8-.3zm-12.7 114H15.6c-1.6 0-1.6 0-1.6-1.6V15.2c0-1.6 0-1.2 1.6-1.2h97.8c1.6 0 1.6-.4 1.6 1.3v97.8c0 1.2-.3 1.6-1.5 1.6zM76.7 87.9c5.6 1.6 11.2.8 16.8.1 1.2-.1 1.4-.8 1.4-2V39.8h-7.5v17.8c-4.2-.4-8-.3-11.7 1.3-6 2.5-9 8.1-8.7 16.1.2 6.5 3.7 11.2 9.7 12.9zM77.9 66c2.8-1.6 5.7-1.5 8.6-1.1.2 0 .6.5.6.8v16.1c-2.7.5-5.3.7-7.8 0-3.2-.9-5-3.3-5.4-6.9-.3-3.9 1.2-7.3 4-8.9zM44 88.1l8.1-17.5 7.8 17.5h8.9L57.1 63.3l11.8-23.6h-8.7l-8.4 16.4L45 39.8l-9.2-.1 10.8 24.9L35 88.1h9z"/></svg>)
})

const XdIconButton = (props) => (
  <Button rightIcon={<XdIcon />} colorScheme='teal' variant="solid" rounded="xl" {...props}>
    <Text marginTop={1}>XdIcon</Text>
  </Button>
);

export { XdIcon,  XdIconButton }