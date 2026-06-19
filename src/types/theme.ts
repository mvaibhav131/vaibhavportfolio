export interface Theme {
  body: string;
  text: string;
  highlight: string;
  dark: string;
  secondaryText: string;
  imageHighlight: string;
  compImgHighlight: string;
  jacketColor: string;
  headerColor: string;
  navColor?: string;
  splashBg: string;
  expTxtColor?: string;
  achievementBannerColor?: string;
  [key: string]: string | undefined;
}

export type ThemeProps = {
  theme: Theme;
};
