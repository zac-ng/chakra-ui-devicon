import { createIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";

const BackbonejsIcon = createIcon({
  displayName: "BackbonejsIcon",
  path: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#002A41" d="M14.646 2.701v66.305l49.353 28.132V78.015l-33.017-18.82V29.633l33.017 18.821v-17.62L14.646 2.701z"/><path fill="#0071B5" d="M113.353 2.701v66.305L64 97.138V78.015l33.016-18.82V29.633L64 48.454v-17.62l49.353-28.133zM14.646 125.303V58.998l49.353-28.134v19.125L30.982 68.808v28.059l33.017-18.82v19.124l-49.353 28.133z"/><path fill="#002A41" d="M113.353 125.303V58.998L64 30.864v19.125l33.016 18.819v28.059L64 78.047v19.124l49.353 28.133z"/></svg>)
})

const BackbonejsIconButton = (props) => (
  <Button rightIcon={<BackbonejsIcon />} colorScheme='teal' variant="solid" rounded="xl" {...props}>
    <Text marginTop={1}>BackbonejsIcon</Text>
  </Button>
);

export { BackbonejsIcon,  BackbonejsIconButton }