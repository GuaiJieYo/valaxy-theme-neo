import type { ThemeConfig } from 'valaxy-theme-neo'
import { defineConfig } from 'valaxy'

/**
 * User Config
 * do not use export const config to avoid defu conflict
 */
export default defineConfig<ThemeConfig>({
  theme: 'neo',

  themeConfig: {
    LoadingPage: {
      enable: true,
      text: '网页仍在加载中~',
      timeout: 6000,
    },
    Navbar: {
      logo: 'https://www.guaijie.eu.org/favicon.ico',
      links: [{
        name: 'Home',
        icon: 'i-ri-home-4-line',
        url: '/'
      }, {
        name: 'Friends',
        icon: 'i-ri-links-line',
        url: '/links'
      }, {
        name: 'About',
        icon: 'i-ri-star-smile-line',
        url: '/about'
      }
      ],
    }
  }
})
