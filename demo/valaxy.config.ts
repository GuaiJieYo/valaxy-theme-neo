import type { ThemeConfig } from "valaxy-theme-neo";
import { defineConfig } from "valaxy";

/**
 * User Config
 * do not use export const config to avoid defu conflict
 */
export default defineConfig<ThemeConfig>({
  theme: "neo",

  devtools: false, // 关闭自带的devtools(使用chrome插件)

  siteConfig: {
    lang: "zh-CN",
    title: "GuaiJie's Blog",
    description: "一个喜欢摆烂的前端菜鸟",
    url: "https://guaijie.eu.org/",
    timezone: "Asia/Shanghai",
    author: {
      name: "GuaiJie",
      intro: "18 岁事个学生",
      avatar: "https://img.cdn1.vip/i/68b5afdd80f44_1756737501.webp",
    },
    favicon: "https://img.cdn1.vip/i/68b5afdd80f44_1756737501.webp",
    
  },

  features: {
    katex: false, // 禁止全局使用katex(字体引用真的占好长的时间啊！)
  },

  themeConfig: {
    LoadingPage: {
      enable: true,
      text: "网页仍在加载中~",
      timeout: 5000,
    },
    Navbar: {
      logo: "https://img.cdn1.vip/i/68b5afdd80f44_1756737501.webp",
      links: [
        {
          name: "主页",
          icon: "i-ri-home-4-line",
          url: "/",
        },
        {
          name: "友人帐",
          icon: "i-ri-links-line",
          url: "/links",
        },
        {
          name: "关于我",
          icon: "i-ri-star-smile-line",
          url: "/about",
        },
      ],
    },
    Banner: {
      title: "Hi,I'm GuaiJie!",
      subtitle: "An Interesting </Developer>",
      background: [
        "https://img.cdn1.vip/i/68b00188e8f86_1756365192.webp",
        "https://img.cdn1.vip/i/68b5b14670d30_1756737862.webp",
        "https://img.cdn1.vip/i/68b0018835d64_1756365192.webp",
        "https://img.cdn1.vip/i/68b00186a3a00_1756365190.webp",
        "https://img.cdn1.vip/i/68b00186a9bc4_1756365190.webp",
        "https://img.cdn1.vip/i/68b001931a6a1_1756365203.webp",
        "https://img.cdn1.vip/i/68b0018d963e1_1756365197.webp",
      ],
    },
  },
});
