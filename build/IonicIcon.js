import { createIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const IonicIcon = createIcon({
  displayName: "IonicIcon",
  path: /*#__PURE__*/_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 128 128",
    children: /*#__PURE__*/_jsxs("g", {
      fill: "#4e8ef7",
      children: [/*#__PURE__*/_jsx("circle", {
        cx: "64",
        cy: "64",
        r: "24.08"
      }), /*#__PURE__*/_jsx("path", {
        d: "M113.14 23.14a8.27 8.27 0 00-13.7-6.25 59 59 0 1011.67 11.67 8.24 8.24 0 002.03-5.42zM64 121A57 57 0 1198.1 18.36a8.27 8.27 0 0011.53 11.53A57 57 0 0164 121z"
      })]
    })
  })
});

const IonicIconButton = props => /*#__PURE__*/_jsx(Button, {
  rightIcon: /*#__PURE__*/_jsx(IonicIcon, {}),
  colorScheme: "teal",
  variant: "solid",
  rounded: "xl",
  ...props,
  children: /*#__PURE__*/_jsx(Text, {
    marginTop: 1,
    children: "IonicIcon"
  })
});

export { IonicIcon, IonicIconButton };