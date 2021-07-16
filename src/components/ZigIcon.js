import { createIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";

const ZigIcon = createIcon({
  displayName: "ZigIcon",
  path: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="#f7a41d"><path d="M38.484 23.843l-15.06 18.405-7.529-11.712z"/><path shape-rendering="crispEdges" d="M38.484 23.843l-10.876 9.203-4.183 9.202h-5.02v42.667h7.53l-9.203 4.183-6.693 14.222H0V23.843z"/><path d="M25.935 84.915L10.039 103.32l-6.693-9.202zM46.85 23.843l5.02 11.713-20.916 6.692z"/><path shape-rendering="crispEdges" d="M46.85 23.843h46.013v18.405H30.954L46.85 32.21z"/><path d="M97.046 84.915L81.15 103.32l-5.856-10.875z"/><path shape-rendering="crispEdges" d="M97.046 84.915l-13.386 7.53-2.51 10.875H35.137V84.915z"/><path d="M125.49 5.438L43.503 103.32 2.51 122.562l81.987-98.719zM117.96 23.843l-.836 15.06-15.059 4.182z"/><path shape-rendering="crispEdges" d="M128 23.843v79.477H88.68l11.712-10.039 4.183-8.366h5.02v-41.83h-7.53l8.366-7.53 7.53-11.712z"/><path d="M104.575 84.915l4.183 12.55-20.078 5.855z"/></g></svg>)
})

const ZigIconButton = (props) => (
  <Button rightIcon={<ZigIcon />} colorScheme='teal' variant="solid" rounded="xl" {...props}>
    <Text marginTop={1}>ZigIcon</Text>
  </Button>
);

export { ZigIcon,  ZigIconButton }