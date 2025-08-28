import type { ThemeConfig } from "../types";
import { useConfig } from "valaxy";
import { computed } from "vue";

/**
 * 返回带type提示的 themeConfig
 */
export function useThemeConfig<T = ThemeConfig>() {
  const config = useConfig<T>();
  return computed(() => config!.value.themeConfig);
}
