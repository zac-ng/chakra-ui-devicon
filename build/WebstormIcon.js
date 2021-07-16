import { createIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const WebstormIcon = createIcon({
  displayName: "WebstormIcon",
  path: /*#__PURE__*/_jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 128 128",
    children: [/*#__PURE__*/_jsx("path", {
      fill: "#2788b5",
      d: "M75.78 113.66c1.28-1.6 2.79-3.36 4.58-5.42l.89-1c1.11-1.29 2-2.28 2.93-3.24a70.64 70.64 0 006.09-7.36c2.74-3.74 4.51-6.55 4.22-11.37-.14-2.48-.24-4.18-1.86-6.18a66.7 66.7 0 00-4.69-4.78c-2.07-2-3.87-3.9-6.31-6.44s-5.6-9-5.6-9a41.4 41.4 0 01-3.19-10.74l-7.18-36.8H45.22l-10 46.41-8.87-46.46H2.22L24 116.72h20.32l10.17-45.64 9 45.64h9.44z"
    }), /*#__PURE__*/_jsx("path", {
      fill: "#fa930d",
      d: "M118.34 17.59c2.14-2.48 3.9-4.48 5.34-6.3H91.24c-1.93 2.46-5.85 7.21-8.09 11.43-3 5.58-5.39 9.76-5.63 20l.11 3.31c0 4.9 3.5 12.08 3.5 12.08a43.35 43.35 0 003.58 5.61l.65.85c3.5 4 8.78 8.48 11.12 11.35 2.73 3.37 2.8 6.53 3 9 .39 6.65-2.29 10.65-5.17 14.58-4.35 5.93-5.92 7-9.27 10.91-2.14 2.47-3.89 4.48-5.34 6.29h33.51a90.25 90.25 0 007-11.42c3-5.58 5.39-9.76 5.63-20l-.16-3.28c0-4.9-3.5-12.09-3.5-12.09a44.31 44.31 0 00-3.59-5.61l-.64-.85c-3.5-4-8.79-8.48-11.12-11.35-2.73-3.38-2.8-6.54-3-9-.4-6.64 2.29-10.65 5.17-14.58 4.42-5.95 6-7.06 9.34-10.93z"
    })]
  })
});

const WebstormIconButton = props => /*#__PURE__*/_jsx(Button, {
  rightIcon: /*#__PURE__*/_jsx(WebstormIcon, {}),
  colorScheme: "teal",
  variant: "solid",
  rounded: "xl",
  ...props,
  children: /*#__PURE__*/_jsx(Text, {
    marginTop: 1,
    children: "WebstormIcon"
  })
});

export { WebstormIcon, WebstormIconButton };