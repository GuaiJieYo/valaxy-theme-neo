import type { DefaultTheme } from "valaxy";

export namespace NeoTheme {
  export type Config = ThemeConfig;
}

/**
 * 主题配置
 */
export interface ThemeConfig extends DefaultTheme.Config {
  /**
   * @name 加载页面设置
   */
  LoadingPage: {
    /**
     * @name 是否启用
     * @required
     */
    enable: boolean;
    /**
     * @name 加载超时时显示的文本
     * @default '网页仍在加载中~'
     */
    text?: string;
    /**
     * @name 超时时间
     * @default 6000
     */
    timeout?: number;
  };
  /**
   * @name 导航栏信息设置
   * @required
   */
  Navbar: {
    /**
     * @name 导航栏图标
     */
    logo?: string;
    /**
     * @name 导航栏链接
     * @required
     */
    links?: {
      /**
       * @name 导航栏链接名称
       * @required
       */
      name: string;
      /**
       * @name 导航栏链接图标
       * @description 默认使用remixicon的图标
       */
      icon?: string;
      /**
       * @name 导航栏链接地址
       * @required
       */
      url: string;
    }[];
  };
  /**
   * @name Banner设置
   * @required
   */
  Banner: {
    /**
     * @name 标题
     */
    title: string;
    /**
     * @name 副标题
     */
    subtitle: string;
    /**
     * @name 背景样式
     * @description 图片请携带 `https://` 或 `http://` 前缀 支持图片/纯色/渐变色背景 可以填多种
     */
    background: string[];
  };
}
