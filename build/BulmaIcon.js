import { createIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";
import { jsx as _jsx } from "react/jsx-runtime";
const BulmaIcon = createIcon({
  displayName: "BulmaIcon",
  path: /*#__PURE__*/_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 128 128",
    children: /*#__PURE__*/_jsx("path", {
      fill: "#00D1B2",
      d: "M59.2 0l40 40-24 24 32 31.9L59.4 128l-40-39.9 7.7-56z"
    })
  })
});

const BulmaIconButton = props => /*#__PURE__*/_jsx(Button, {
  rightIcon: /*#__PURE__*/_jsx(BulmaIcon, {}),
  colorScheme: "teal",
  variant: "solid",
  rounded: "xl",
  ...props,
  children: /*#__PURE__*/_jsx(Text, {
    marginTop: 1,
    children: "BulmaIcon"
  })
});

export { BulmaIcon, BulmaIconButton };