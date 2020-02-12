import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/global";

const theme = {
  backgroundDark: "#f6f9fc",
  backgroundLight: "#fff",
  border: "#666666",
  text: "#333333"
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      </ThemeProvider>
    );
  }
}
