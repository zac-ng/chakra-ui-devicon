import { createIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";

const JasmineIcon = createIcon({
  displayName: "JasmineIcon",
  path: (<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="#8a4182"><path d="M68.49 52.7h-9.44l-2.55-3.28V23.7h14.38v25.72l-2.39 3.28zM55.72 55.1l-2.92 8.98-3.9 1.41-24.47-7.95 4.45-13.67 24.46 7.94 2.38 3.29zM54.04 67.74l7.64 5.55.13 4.14L46.7 98.25 35.06 89.8l15.13-20.82 3.85-1.24zM65.76 73.33l7.65-5.55 3.98 1.16 15.12 20.81-11.63 8.45-15.12-20.81v-4.06zM74.84 64.23l-2.92-8.99 2.33-3.43 24.46-7.94 4.45 13.67-24.47 7.95-3.85-1.26z"/><path d="M64 1.41A62.59 62.59 0 10126.59 64 62.59 62.59 0 0064 1.41zm-.34 111.5a49.5 49.5 0 1149.5-49.5 49.5 49.5 0 01-49.5 49.51z"/><path d="M61.58 82.99h3.92v19.51h-3.92zM82.838 70.95l1.211-3.728 18.555 6.029-1.211 3.728zM77.754 47.062l-3.171-2.304L86.05 28.974l3.172 2.304zM53.352 44.759l-3.172 2.304L38.713 31.28l3.171-2.304zM43.395 67.224l1.211 3.728-18.555 6.029-1.211-3.728z"/></g></svg>)
})

const JasmineIconButton = (props) => (
  <Button rightIcon={<JasmineIcon />} colorScheme='teal' variant="solid" rounded="xl" {...props}>
    <Text marginTop={1}>JasmineIcon</Text>
  </Button>
);

export { JasmineIcon,  JasmineIconButton }