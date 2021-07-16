import { createIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const HaskellIcon = createIcon({
  displayName: "HaskellIcon",
  path: /*#__PURE__*/_jsxs("svg", {
    viewBox: "0 0 128 128",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/_jsx("path", {
      fill: "#463B63",
      d: "M0 110.2L30.1 65 0 19.9h22.6L52.7 65l-30.1 45.1H0z"
    }), /*#__PURE__*/_jsx("path", {
      fill: "#5E5187",
      d: "M30.1 110.2L60.2 65 30.1 19.9h22.6l60.2 90.3H90.4L71.5 81.9l-18.8 28.2H30.1z"
    }), /*#__PURE__*/_jsx("path", {
      fill: "#904F8C",
      d: "M102.9 83.8l-10-15.1H128v15.1h-25.1zM87.8 61.3l-10-15.1H128v15.1H87.8z"
    })]
  })
});

const HaskellIconButton = props => /*#__PURE__*/_jsx(Button, {
  rightIcon: /*#__PURE__*/_jsx(HaskellIcon, {}),
  colorScheme: "teal",
  variant: "solid",
  rounded: "xl",
  ...props,
  children: /*#__PURE__*/_jsx(Text, {
    marginTop: 1,
    children: "HaskellIcon"
  })
});

export { HaskellIcon, HaskellIconButton };