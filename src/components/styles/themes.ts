import { DefaultTheme } from "styled-components";

export interface ExtendedTheme extends DefaultTheme {
  id: string;
  name: string;
  colors: {
    body: string,
    scrollHandle: string,
    scrollHandleHover: string,
    primary: string,
    secondary: string,
    text: {
      100: string,
      200: string,
      300: string,
    },
  }
}

export type Themes = {
  [key: string]: ExtendedTheme;
};

export const themes: Themes = {
    dark: {
      id: "T_001",
      name: "dark",
      colors: {
        body: "#2E3440",
        scrollHandle: "#4C566A",
        scrollHandleHover: "#E5E9F0",
        primary: "#A3BE8C",
        secondary: "#EBCB8B",
        text: {
          100: "#E5E9F0",
          200: "#D8DEE9",
          300: "#4C566A",
        },
      },
    },
    light: {
      id: "T_002",
      name: "light",
      colors: {
        body: "#E5E9F0",
        scrollHandle: "#D8DEE9",
        scrollHandleHover: "#2E3440",
        primary: "#A3BE8C",
        secondary: "#EBCB8B",
        text: {
          100: "#2E3440",
          200: "#4C566A",
          300: "#D8DEE9",
        },
      },
    }
};