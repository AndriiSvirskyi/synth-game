export type Colors = Record<string, string>;
export type Fonts = Record<string, string>;
export type AppTheme = Record<string, string>;

export interface Theme {
  colors: Colors;
  fonts: Fonts;
  appTheme: AppTheme;
}

const colors = {
  white: "#ffffff",
  black: "#000000",
  gray: "#F4F4F4",
  darkGray: "#454545",
  lightBlack: "rgba(0, 0, 0, 0.6)",
  opacityBlack: "rgba(0, 0, 0, 0.04)",
  primaryColor: "#6200EE",
  secondaryPrimary: "#F2E7FE",
  none: "rgba(0, 0, 0, 0)",
  lightGray: "#F4F4F4",
  opacityWhite: "rgba(255, 255, 255, 0.12)",
  lightWhite: "rgba(255, 255, 255, 0.54)",
  red: "#F2003A",
};

export const theme: Theme = {
  colors,
  fonts: {
    Roboto: "Roboto",
  },
  appTheme: {
    secondaryButtonBackground: colors.secondaryPrimary,
    primaryButtonBackground: colors.primaryColor,
    primaryButtonTextColor: colors.white,
    secondaryButtonTextColor: colors.primaryColor,
  },
};
