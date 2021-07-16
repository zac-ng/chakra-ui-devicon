import { createIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";

const TravisIcon = createIcon({
  displayName: "TravisIcon",
  path: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#BB2031" d="M40 34h18v61h-8v11h28V94h-7V33h19v9h10V24H29v18h11zm82.2-31H6.031C4.005 3 2 4.226 2 6.225v116.154c0 2 2.005 3.621 4.031 3.621H122.2c2.026 0 2.8-1.621 2.8-3.621V6.225C125 4.226 124.226 3 122.2 3zM106 48H85v-9h-9v48h9v24H45V88h6V40h-6v8H22V18h84v30z"/></svg>)
})

const TravisIconButton = (props) => (
  <Button rightIcon={<TravisIcon />} colorScheme='teal' variant="solid" rounded="xl" {...props}>
    <Text marginTop={1}>TravisIcon</Text>
  </Button>
);

export { TravisIcon,  TravisIconButton }