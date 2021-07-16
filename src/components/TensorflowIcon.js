import { createIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";

const TensorflowIcon = createIcon({
  displayName: "TensorflowIcon",
  path: (<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 128 128"><defs><path d="M54.74 128L32.9 115.32V40.55L0 59.56l.08-28.32L54.74 0v128zM59.65 0v128l21.84-12.68V79.31l16.49 9.53-.1-24.63-16.39-9.36v-14.3l32.89 19.01-.08-28.32L59.65 0z" id="tensorflow-original-a"/></defs><path  d="M61.55 128l-21.84-12.68V40.55L6.81 59.56l.08-28.32L61.55 0zM66.46 0v128l21.84-12.68V79.31l16.49 9.53-.1-24.63-16.39-9.36v-14.3l32.89 19.01-.08-28.32z" color="#000" font-weight="400" font-family="sans-serif" overflow="visible" fill="#ff6f00"/><use xlinkHref="#tensorflow-original-a" fill-opacity="0" stroke="#000" stroke-opacity="0"/></svg>)
})

const TensorflowIconButton = (props) => (
  <Button rightIcon={<TensorflowIcon />} colorScheme='teal' variant="solid" rounded="xl" {...props}>
    <Text marginTop={1}>TensorflowIcon</Text>
  </Button>
);

export { TensorflowIcon,  TensorflowIconButton }