import type { ThemeConfig } from "valaxy-theme-neo";
import { defineConfig } from "valaxy";

/**
 * User Config
 * do not use export const config to avoid defu conflict
 */
export default defineConfig<ThemeConfig>({
  theme: "neo",

  themeConfig: {
    LoadingPage: {
      enable: true,
      text: "网页仍在加载中~",
      timeout: 5000,
    },
    Navbar: {
      logo: "https://valaxy.site/assets/valaxy-logo.DPa8-qbg.png",
      links: [
        {
          name: "Home",
          icon: "i-ri-home-4-line",
          url: "/",
        },
        {
          name: "Friends",
          icon: "i-ri-links-line",
          url: "/links",
        },
        {
          name: "About",
          icon: "i-ri-star-smile-line",
          url: "/about",
        },
      ],
    },
    Banner: {
      title: "Hi,I'm GuaiJie!",
      subtitle: "A Front-end Developer",
      background: [
        "https://img.cdn1.vip/i/68b00188e8f86_1756365192.webp",
        "https://img.cdn1.vip/i/68b001849e487_1756365188.webp",
        "https://img.cdn1.vip/i/68b0018835d64_1756365192.webp",
        "https://img.cdn1.vip/i/68b00186a3a00_1756365190.webp",
        "https://img.cdn1.vip/i/68b00186a9bc4_1756365190.webp",
        "https://img.cdn1.vip/i/68b001931a6a1_1756365203.webp",
        "https://img.cdn1.vip/i/68b0018d963e1_1756365197.webp",
      ],
    },
  },
});
