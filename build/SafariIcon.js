import { createIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const SafariIcon = createIcon({
  displayName: "SafariIcon",
  path: /*#__PURE__*/_jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 128 128",
    children: [/*#__PURE__*/_jsxs("linearGradient", {
      id: "safari-original-a",
      gradientUnits: "userSpaceOnUse",
      x1: "295.835",
      y1: "274.049",
      x2: "295.835",
      y2: "272.933",
      gradientTransform: "matrix(112 0 0 -112 -33069.5 30695)",
      children: [/*#__PURE__*/_jsx("stop", {
        offset: "0",
        "stop-color": "#19D7FF"
      }), /*#__PURE__*/_jsx("stop", {
        offset: "1",
        "stop-color": "#1E64F0"
      })]
    }), /*#__PURE__*/_jsx("circle", {
      fill: "url(#safari-original-a)",
      cx: "64",
      cy: "64",
      r: "62.5"
    }), /*#__PURE__*/_jsx("path", {
      stroke: "#fff",
      fill: "none",
      d: "M64 7.6v9.2m0 94.1v9.2M73.8 8.5l-1.6 9.1m-16.4 92.5l-1.6 9.1M83.2 11l-3.1 8.7M47.9 108l-3.1 8.7M54.2 8.5l1.6 9.1m16.4 92.5l1.6 9.1M44.8 11l3.1 8.7M80.1 108l3.1 8.7M35.9 15.2l4.6 8m47 81.4l4.6 7.9M27.9 20.8l5.9 7m60.4 72.1l5.9 7M20.9 27.7l7.1 5.9m72 60.5l7.1 5.9M15.3 35.8l8 4.6m81.4 47l8 4.6M11.2 44.6l8.6 3.2m88.4 32.1l8.6 3.2M8.6 54.1l9.1 1.6M110.3 72l9.1 1.6M7.8 63.9H17m94 0h9.2M8.6 73.6l9.1-1.6m92.6-16.3l9.1-1.6m-108.2 29l8.6-3.2m88.4-32.1l8.6-3.2M15.3 92l8-4.6m81.4-47l8-4.6M20.9 100l7.1-5.9m72-60.5l7.1-5.9m-79.2 79.2l5.9-7m60.4-72.1l5.9-7m-64.2 91.7l4.6-7.9m47-81.4l4.6-8m-33-7.3l.4 5m9 102l.4 5M49.4 9.6l1.3 4.8m26.6 98.9l1.3 4.9M40.2 12.9l2.1 4.6m43.3 92.8l2.2 4.5m-56.1-97l2.9 4.1m58.8 83.9l2.9 4.1M24.2 24.1l3.6 3.5m72.4 72.5l3.6 3.5m-85.9-72l4.2 2.9m83.8 58.7l4.2 2.9m-97-56l4.5 2.1m92.8 43.3l4.5 2.1M9.7 49.3l4.9 1.3m98.8 26.5l4.9 1.3M8 58.9l5 .5m102 8.9l5 .5m-112 0l5-.5m102-8.9l5-.5M9.7 78.4l4.9-1.3m98.8-26.5l4.9-1.3M13.1 87.6l4.5-2.1m92.8-43.3l4.5-2.1m-97 56l4.2-2.9m83.8-58.7l4.2-2.9m-78.4 78.3l2.9-4.1m58.8-83.9l2.9-4.1m-56.1 97l2.2-4.5m43.2-92.8l2.2-4.6M49.4 118.2l1.3-4.9m26.6-98.9l1.3-4.8M59.1 119.9l.4-5m9-102l.4-5"
    }), /*#__PURE__*/_jsx("path", {
      fill: "red",
      d: "M106.7 21l-48 37.7 5.2 5.2z"
    }), /*#__PURE__*/_jsx("path", {
      fill: "#D01414",
      d: "M63.9 63.9l6 6L106.7 21z"
    }), /*#__PURE__*/_jsx("path", {
      fill: "#fff",
      d: "M58.7 58.7l-37.7 48 42.9-42.8z"
    }), /*#__PURE__*/_jsx("path", {
      fill: "#ACACAC",
      d: "M21 106.7l48.9-36.8-6-6z"
    })]
  })
});

const SafariIconButton = props => /*#__PURE__*/_jsx(Button, {
  rightIcon: /*#__PURE__*/_jsx(SafariIcon, {}),
  colorScheme: "teal",
  variant: "solid",
  rounded: "xl",
  ...props,
  children: /*#__PURE__*/_jsx(Text, {
    marginTop: 1,
    children: "SafariIcon"
  })
});

export { SafariIcon, SafariIconButton };