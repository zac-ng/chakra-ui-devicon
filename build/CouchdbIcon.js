import { createIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";
import { jsx as _jsx } from "react/jsx-runtime";
const CouchdbIcon = createIcon({
  displayName: "CouchdbIcon",
  path: /*#__PURE__*/_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 128 128",
    children: /*#__PURE__*/_jsx("path", {
      fill: "#e42528",
      d: "M101.4 77.2c0 5-2.7 7.5-7.6 7.7H33.9c-4.9 0-7.6-2.5-7.6-7.7 0-5 2.7-7.5 7.6-7.7h60.2c4.9.2 7.3 2.7 7.3 7.7zm-7.3 11.5H33.9c-4.9 0-7.6 2.4-7.6 7.7 0 5 2.7 7.4 7.6 7.7h60.2c4.9 0 7.6-2.5 7.6-7.7-.3-5.3-2.7-7.7-7.6-7.7zm18.6-42.1c-4.9 0-7.6 2.5-7.6 7.4v42.1c0 5 2.7 7.5 7.6 7.7 7.4-.2 11.3-7.7 11.3-22.9V62c0-10.2-3.9-15.2-11.3-15.4zm-97.4 0C7.9 46.8 4 51.8 4 62v18.9c0 15.2 3.9 22.7 11.3 22.9 4.9 0 7.6-2.4 7.6-7.7V54.3c-.2-5-2.7-7.5-7.6-7.7zm97.4-3.8c0-12.7-6.6-18.7-18.6-18.9H33.9c-12.2.2-18.6 6.5-18.6 18.9 7.4 0 11.3 4 11.3 11.5s3.9 11.4 11.3 11.4h52.5c7.3 0 11.3-3.9 11.3-11.4-.3-7.7 3.9-11.2 11-11.5z"
    })
  })
});

const CouchdbIconButton = props => /*#__PURE__*/_jsx(Button, {
  rightIcon: /*#__PURE__*/_jsx(CouchdbIcon, {}),
  colorScheme: "teal",
  variant: "solid",
  rounded: "xl",
  ...props,
  children: /*#__PURE__*/_jsx(Text, {
    marginTop: 1,
    children: "CouchdbIcon"
  })
});

export { CouchdbIcon, CouchdbIconButton };