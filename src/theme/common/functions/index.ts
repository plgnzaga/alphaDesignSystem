import { ColorScheme } from "../../palettes/base";

export const getColorDetail = (scheme: Partial<ColorScheme>[], value: number): Partial<ColorScheme> | undefined => {
    return scheme.find((i) => i.shade === value);
  };
  export const getColor = (scheme: Partial<ColorScheme>[], value: number): string => {
    return scheme.find((i) => i.shade === value)?.hexCode ?? '';
  };
  export const getMainColor = (scheme: Partial<ColorScheme>[]) => {
    return scheme.find((i) => i.main)?.hexCode ?? '';
  }