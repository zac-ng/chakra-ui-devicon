import { createIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";

const JuliaIcon = createIcon({
  displayName: "JuliaIcon",
  path: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M58.3 93.5c0 15.7-12.7 28.3-28.3 28.3-15.7 0-28.3-12.7-28.3-28.3 0-15.6 12.7-28.3 28.3-28.3 15.6-.1 28.3 12.6 28.3 28.3" fill="#cb3c33"/><path d="M30 123.4c-16.5 0-30-13.4-30-30s13.4-30 30-30 30 13.4 30 30-13.5 30-30 30zm0-56.6c-14.7 0-26.7 12-26.7 26.7s12 26.7 26.7 26.7 26.7-12 26.7-26.7-12-26.7-26.7-26.7z" fill="#eee"/><path d="M126.4 93.5c0 15.7-12.7 28.3-28.3 28.3s-28.3-12.7-28.3-28.3c0-15.6 12.7-28.3 28.3-28.3s28.3 12.6 28.3 28.3" fill="#9558b2"/><path d="M98 123.4c-16.5 0-30-13.4-30-30s13.4-30 30-30 30 13.4 30 30-13.4 30-30 30zm0-56.6c-14.7 0-26.7 12-26.7 26.7s12 26.7 26.7 26.7 26.7-12 26.7-26.7S112.8 66.8 98 66.8z" fill="#eee"/><path d="M92.4 34.5c0 15.6-12.7 28.3-28.3 28.3-15.7 0-28.3-12.7-28.3-28.3S48.4 6.2 64 6.2c15.7 0 28.4 12.7 28.4 28.3" fill="#389826"/><path d="M64 64.5c-16.5 0-30-13.4-30-30s13.4-30 30-30 30 13.4 30 30-13.5 30-30 30zm0-56.7c-14.7 0-26.7 12-26.7 26.7s12 26.7 26.7 26.7 26.7-12 26.7-26.7S78.7 7.8 64 7.8z" fill="#eee"/></svg>)
})

const JuliaIconButton = (props) => (
  <Button rightIcon={<JuliaIcon />} colorScheme='teal' variant="solid" rounded="xl" {...props}>
    <Text marginTop={1}>JuliaIcon</Text>
  </Button>
);

export { JuliaIcon,  JuliaIconButton }