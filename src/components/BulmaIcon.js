import { createIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";

const BulmaIcon = createIcon({
  displayName: "BulmaIcon",
  path: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#00D1B2" d="M59.2 0l40 40-24 24 32 31.9L59.4 128l-40-39.9 7.7-56z"/></svg>)
})

const BulmaIconButton = (props) => (
  <Button rightIcon={<BulmaIcon />} colorScheme='teal' variant="solid" rounded="xl" {...props}>
    <Text marginTop={1}>BulmaIcon</Text>
  </Button>
);

export { BulmaIcon,  BulmaIconButton }