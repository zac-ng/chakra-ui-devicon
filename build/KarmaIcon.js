import { createIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const KarmaIcon = createIcon({
  displayName: "KarmaIcon",
  path: /*#__PURE__*/_jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 128 128",
    children: [/*#__PURE__*/_jsx("path", {
      fill: "#409B83",
      d: "M77.281 89.582l19.625 37.84h31.02l-35.153-67.14-15.492 29.3m-62.535 20.29l14.367-17.497 22.973 35.047-14.746-70.3-12.45 26.472-10.144 26.277"
    }), /*#__PURE__*/_jsx("path", {
      fill: "#56C5A8",
      d: "M14.746 109.871L37.34 57.117 22.977 74.625 0 39.575l14.746 70.296M124.97.391h-31.02l-19 36.285V.39H46.492v37.632l15.172 72.282 3.535 17.117h9.75V95.664L124.97.391"
    })]
  })
});

const KarmaIconButton = props => /*#__PURE__*/_jsx(Button, {
  rightIcon: /*#__PURE__*/_jsx(KarmaIcon, {}),
  colorScheme: "teal",
  variant: "solid",
  rounded: "xl",
  ...props,
  children: /*#__PURE__*/_jsx(Text, {
    marginTop: 1,
    children: "KarmaIcon"
  })
});

export { KarmaIcon, KarmaIconButton };