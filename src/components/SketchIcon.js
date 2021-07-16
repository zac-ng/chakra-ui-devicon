import { createIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";

const SketchIcon = createIcon({
  displayName: "SketchIcon",
  path: (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#fdb300" d="M29.62 12.85L64 9.24l34.38 3.61L125 48.29l-61 70.47L3 48.29z"/><path fill="#ea6c00" d="M27.71 48.29L64 118.76 3 48.29h24.71zM100.29 48.29L64 118.76l61-70.47h-24.71z"/><path fill="#fdad00" d="M27.71 48.29h72.58L64 118.76 27.71 48.29z"/><path fill="#fdd231" d="M64 9.24l-34.38 3.61-1.91 35.44L64 9.24zM64 9.24l34.38 3.61 1.91 35.44L64 9.24z"/><path fill="#fdad00" d="M125 48.29L98.38 12.85l1.91 35.44H125z"/><path fill="#feeeb7" d="M64 9.24L27.71 48.29h72.58L64 9.24z"/><path fill="#fdad00" d="M3 48.29l26.62-35.44-1.91 35.44H3z"/></svg>)
})

const SketchIconButton = (props) => (
  <Button rightIcon={<SketchIcon />} colorScheme='teal' variant="solid" rounded="xl" {...props}>
    <Text marginTop={1}>SketchIcon</Text>
  </Button>
);

export { SketchIcon,  SketchIconButton }