import type { ThemeConfig } from "./types";
import { defineTheme } from "valaxy";
import { defaultThemeConfig, generateSafelist } from "./node";

export default defineTheme<ThemeConfig>((options) => {
  return {
    themeConfig: defaultThemeConfig,
    // vite: ,
    unocss: {
      safelist: generateSafelist(options.config.themeConfig as ThemeConfig),
    },
  };
});
