import { createIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const Html5Icon = createIcon({
  displayName: "Html5Icon",
  path: /*#__PURE__*/_jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 128 128",
    children: [/*#__PURE__*/_jsx("path", {
      fill: "#E44D26",
      d: "M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"
    }), /*#__PURE__*/_jsx("path", {
      fill: "#F16529",
      d: "M64 116.8l36.378-10.086 8.559-95.878H64z"
    }), /*#__PURE__*/_jsx("path", {
      fill: "#EBEBEB",
      d: "M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"
    }), /*#__PURE__*/_jsx("path", {
      fill: "#fff",
      d: "M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"
    })]
  })
});

const Html5IconButton = props => /*#__PURE__*/_jsx(Button, {
  rightIcon: /*#__PURE__*/_jsx(Html5Icon, {}),
  colorScheme: "teal",
  variant: "solid",
  rounded: "xl",
  ...props,
  children: /*#__PURE__*/_jsx(Text, {
    marginTop: 1,
    children: "Html5Icon"
  })
});

export { Html5Icon, Html5IconButton };