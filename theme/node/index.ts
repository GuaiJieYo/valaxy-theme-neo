// import type { ResolvedValaxyOptions } from 'valaxy'
// import type { Plugin } from 'vite'
import type { ThemeConfig } from "../types";

/**
 * 默认主题配置
 */
export const defaultThemeConfig: ThemeConfig = {
  valaxyDarkOptions: {
    circleTransition: true,
  },

  LoadingPage: {
    enable: true,
    text: "网页仍在加载中~",
    timeout: 5000,
  },
  Navbar: {
    logo: "./favicon.svg",
    links: [
      {
        name: "Home",
        icon: "i-ri-home-4-line",
        url: "/",
      },
    ],
  },
  Banner: {
    title: "GuaiJie",
    subtitle: "Welcome to my blog",
    background: ["https://cdn.guaijie.eu.org/background/bg1.webp"],
  },
};

/**
 * generateSafelist by config
 * @param themeConfig
 */
export function generateSafelist(themeConfig: ThemeConfig) {
  const safelist: string[] = [];

  const linksIcon = themeConfig.Navbar?.links
    ?.map((link) => link.icon)
    .filter((icon): icon is string => icon !== undefined);
  if (linksIcon && linksIcon.length > 0) {
    safelist.push(...linksIcon);
  }

  return safelist;
}
