import { createIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";
import { jsx as _jsx } from "react/jsx-runtime";
const TrelloIcon = createIcon({
  displayName: "TrelloIcon",
  path: /*#__PURE__*/_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 128 128",
    children: /*#__PURE__*/_jsx("path", {
      fill: "#23719F",
      d: "M127 16.142C127 7.779 120.221 1 111.858 1H16.142C7.779 1 1 7.779 1 16.142v95.715C1 120.221 7.779 127 16.142 127h95.716c8.363 0 15.142-6.779 15.142-15.143V16.142zM58 99.54c0 3.807-3.286 6.46-7.093 6.46H23.563C19.756 106 17 103.347 17 99.54V23.23c0-3.808 2.756-7.23 6.563-7.23h27.344C54.714 16 58 19.422 58 23.23v76.31zm55-66.456V64.97c0 3.807-2.936 7.03-6.744 7.03h-27.33C75.118 72 72 68.776 72 64.97V22.866C72 19.058 75.118 16 78.926 16h27.33c3.808 0 6.744 3.058 6.744 6.866v10.218z"
    })
  })
});

const TrelloIconButton = props => /*#__PURE__*/_jsx(Button, {
  rightIcon: /*#__PURE__*/_jsx(TrelloIcon, {}),
  colorScheme: "teal",
  variant: "solid",
  rounded: "xl",
  ...props,
  children: /*#__PURE__*/_jsx(Text, {
    marginTop: 1,
    children: "TrelloIcon"
  })
});

export { TrelloIcon, TrelloIconButton };