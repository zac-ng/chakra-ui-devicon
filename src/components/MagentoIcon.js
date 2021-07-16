import { createIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";

const MagentoIcon = createIcon({
  displayName: "MagentoIcon",
  path: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#F26322" d="M119.82 31.97v64.01l-15.85 9.12V41.17l-39.62-22.9-39.64 22.9.1 63.96-15.82-9.15V32.02L64.45 0l55.37 31.97zM72.3 105.1l-7.9 4.6-7.95-4.55V41.17l-15.82 9.15.03 63.96L64.38 128l23.77-13.72V50.29L72.3 41.14v63.96z"/></svg>)
})

const MagentoIconButton = (props) => (
  <Button rightIcon={<MagentoIcon />} colorScheme='teal' variant="solid" rounded="xl" {...props}>
    <Text marginTop={1}>MagentoIcon</Text>
  </Button>
);

export { MagentoIcon,  MagentoIconButton }