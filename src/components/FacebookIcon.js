import { createIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";

const FacebookIcon = createIcon({
  displayName: "FacebookIcon",
  path: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><rect fill="#3d5a98" x="4.83" y="4.83" width="118.35" height="118.35" rx="6.53" ry="6.53"/><path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0091 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"/></svg>)
})

const FacebookIconButton = (props) => (
  <Button rightIcon={<FacebookIcon />} colorScheme='teal' variant="solid" rounded="xl" {...props}>
    <Text marginTop={1}>FacebookIcon</Text>
  </Button>
);

export { FacebookIcon,  FacebookIconButton }