import { createIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const IntellijIcon = createIcon({
  displayName: "IntellijIcon",
  path: /*#__PURE__*/_jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 128 128",
    children: [/*#__PURE__*/_jsx("path", {
      fill: "#fa930d",
      d: "M5.55 64.73a17.08 17.08 0 1017.08-17.09A17.11 17.11 0 005.55 64.73z"
    }), /*#__PURE__*/_jsx("path", {
      fill: "#136ba2",
      d: "M107.48 4.73c-9.39 0-15 7.56-15 20.23v77.8c0 12.66 5.59 20.23 15 20.23s15-7.56 15-20.23V25c-.03-12.7-5.63-20.27-15-20.27zM81.25 6.38H19.88a14.92 14.92 0 000 29.81v.11h31.41v28.4a28.7 28.7 0 01-28.63 28.7h-.77l-.08.1c-.42 0-.85-.07-1.29-.07a14.94 14.94 0 100 29.87c.45 0 .9 0 1.34-.07v.05h.78a58.65 58.65 0 0058.61-58.55v-.54-9.59-.11V6.38z"
    })]
  })
});

const IntellijIconButton = props => /*#__PURE__*/_jsx(Button, {
  rightIcon: /*#__PURE__*/_jsx(IntellijIcon, {}),
  colorScheme: "teal",
  variant: "solid",
  rounded: "xl",
  ...props,
  children: /*#__PURE__*/_jsx(Text, {
    marginTop: 1,
    children: "IntellijIcon"
  })
});

export { IntellijIcon, IntellijIconButton };