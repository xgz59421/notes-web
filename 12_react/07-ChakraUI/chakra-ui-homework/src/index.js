import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, CSSReset } from "@chakra-ui/core";
import App from "./components/App";
import theme from '@chakra-ui/theme';

console.log(theme);
ReactDOM.render(
  <ChakraProvider theme={theme}>
    <CSSReset />
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
