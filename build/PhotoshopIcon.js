import { createIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";
import { jsx as _jsx } from "react/jsx-runtime";
const PhotoshopIcon = createIcon({
  displayName: "PhotoshopIcon",
  path: /*#__PURE__*/_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 128 128",
    children: /*#__PURE__*/_jsx("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      fill: "#80B5E2",
      d: "M126.216.727C89.993.716 53.932.717 17.708.717 12.527.717 7.257.713 2.076.728 1.748.729 1 .881 1 .964V127h126V.964c0-.083-.414-.237-.784-.237zM113.48 114.666c-32.641-.038-65.271-.03-97.912-.03-1.576 0-1.569-.003-1.569-1.627V15.212C14 13.605 13.984 14 15.577 14h97.798c1.638 0 1.625-.396 1.625 1.291v48.837c0 16.32-.007 32.64.036 48.959.004 1.243-.289 1.58-1.556 1.579zM56.82 39.644c-6.668-1.563-13.38-.792-20.085-.107-1.423.146-1.695.755-1.691 2.018C35.087 56.762 35 71.969 35 87.176V88h9V70.139c5 .375 9.576.286 14.049-1.31 7.169-2.558 10.752-8.111 10.365-16.219-.313-6.548-4.426-11.286-11.594-12.966zm-1.953 22.344c-3.194 1.557-6.59 1.52-10.005 1.058-.266-.036-.675-.511-.677-.784-.04-5.331-.03-10.661-.03-16.138 3.131-.488 6.1-.726 9.062.018 3.673.923 5.804 3.319 6.201 6.917.436 3.954-1.247 7.319-4.551 8.929zm33.301 7.106c-1.469-.805-3.08-1.347-4.606-2.053-1.41-.653-2.833-1.296-4.174-2.076-.935-.543-1.36-1.492-1.36-2.611 0-1.892 1.294-3.417 3.504-3.598 1.649-.135 3.361.035 4.994.34 1.376.256 2.681.899 4.082 1.395l1.767-6.269c-3.345-1.624-6.749-2.235-10.285-2.11-3.006.105-5.814.871-8.352 2.599-4.743 3.229-7.057 11.807.051 16.416 1.805 1.171 3.893 1.905 5.851 2.841 1.218.583 2.489 1.079 3.641 1.772 1.452.874 1.946 2.297 1.694 3.94-.247 1.615-1.33 2.638-2.836 2.874-1.68.264-3.466.435-5.118.144-2.339-.411-4.599-1.281-6.974-1.979-.426 1.59-.831 3.349-1.384 5.06-.303.938-.125 1.401.795 1.768 5.617 2.231 11.334 2.69 17.082.717 4.296-1.475 6.915-4.524 7.256-9.169.332-4.527-1.708-7.851-5.628-10.001z"
    })
  })
});

const PhotoshopIconButton = props => /*#__PURE__*/_jsx(Button, {
  rightIcon: /*#__PURE__*/_jsx(PhotoshopIcon, {}),
  colorScheme: "teal",
  variant: "solid",
  rounded: "xl",
  ...props,
  children: /*#__PURE__*/_jsx(Text, {
    marginTop: 1,
    children: "PhotoshopIcon"
  })
});

export { PhotoshopIcon, PhotoshopIconButton };