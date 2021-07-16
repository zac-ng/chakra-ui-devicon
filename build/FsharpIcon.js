import { createIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const FsharpIcon = createIcon({
  displayName: "FsharpIcon",
  path: /*#__PURE__*/_jsxs("svg", {
    version: "1.2",
    baseProfile: "tiny",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 128 128",
    overflow: "visible",
    children: [/*#__PURE__*/_jsx("path", {
      fill: "#378BBA",
      d: "M0 64.5L60.7 3.8v30.4L30.4 64.5l30.4 30.4v30.4L0 64.5z"
    }), /*#__PURE__*/_jsx("path", {
      fill: "#378BBA",
      d: "M39.1 64.5l21.7-21.7v43.4L39.1 64.5z"
    }), /*#__PURE__*/_jsx("path", {
      fill: "#30B9DB",
      d: "M128 64.5L65.1 3.8v30.4l30.4 30.4-30.4 30.3v30.4L128 64.5z"
    })]
  })
});

const FsharpIconButton = props => /*#__PURE__*/_jsx(Button, {
  rightIcon: /*#__PURE__*/_jsx(FsharpIcon, {}),
  colorScheme: "teal",
  variant: "solid",
  rounded: "xl",
  ...props,
  children: /*#__PURE__*/_jsx(Text, {
    marginTop: 1,
    children: "FsharpIcon"
  })
});

export { FsharpIcon, FsharpIconButton };