import { createTheme } from '@mui/material';
import {ColorScheme, dangerColors, darkColors, lightColors, primaryColors, secondaryColors, successColors, warningColors} from './palettes/index'
import { PaletteColorOptionsType } from '../@types/mui';

export const getColorDetail = (scheme: Partial<ColorScheme>[], value: number): Partial<ColorScheme> | undefined => {
  return scheme.find((i) => i.shade === value);
};
export const getColor = (scheme: Partial<ColorScheme>[], value: number): string => {
    return scheme.find((i) => i.shade === value)?.hexCode ?? '';
};
export const getMainColor = (scheme: Partial<ColorScheme>[]) => {
  return scheme.find((i) => i.main)?.hexCode ?? '';
}

const alphaTheme = createTheme({
    palette: {
        primary: {
          main:getMainColor(primaryColors),
          300:getColor(primaryColors,300),
          400:getColor(primaryColors,400),
          500:getColor(primaryColors,500),
          600:getColor(primaryColors,600),
          700:getColor(primaryColors,700),
          800:getColor(primaryColors,800),
          900:getColor(primaryColors,900),
          950:getColor(primaryColors,950),
          contrastText: getMainColor(lightColors),
        } as PaletteColorOptionsType,
        secondary:{
          main:getMainColor(secondaryColors),
          300:getColor(secondaryColors,300),
          400:getColor(secondaryColors,400),
          500:getColor(secondaryColors,500),
          600:getColor(secondaryColors,600),
          700:getColor(secondaryColors,700),
          800:getColor(secondaryColors,800),
          900:getColor(secondaryColors,900),
          950:getColor(secondaryColors,950),
        } as PaletteColorOptionsType,
        success:{
          main:getMainColor(successColors),
          50:getColor(successColors,50),
          100:getColor(successColors,100),
          200:getColor(successColors,200),
          300:getColor(successColors,300),
          400:getColor(successColors,400),
          500:getColor(successColors,500),
          600:getColor(successColors,600),
          700:getColor(successColors,700),
          contrastText:getMainColor(lightColors)
        },
        warning:{
          main:getMainColor(warningColors),
          50:getColor(warningColors,50),
          100:getColor(warningColors,100),
          200:getColor(warningColors,200),
          300:getColor(warningColors,300),
          400:getColor(warningColors,400),
          450:getColor(warningColors,450),
          500:getColor(warningColors,500),
          600:getColor(warningColors,600),
        } as PaletteColorOptionsType,
        danger:{
          main:getMainColor(dangerColors),
          300:getColor(dangerColors,300),
          400:getColor(dangerColors,400),
          500:getColor(dangerColors,500),
          600:getColor(dangerColors,600),
          700:getColor(dangerColors,700),
          800:getColor(dangerColors,800),
          900:getColor(dangerColors,900),
          950:getColor(dangerColors,950),
          contrastText:getMainColor(lightColors),
        } as PaletteColorOptionsType,
        light:{
          main:getMainColor(lightColors),
          10:getColor(lightColors,10),
          30:getColor(lightColors,30),
          50:getColor(lightColors,50),
          100:getColor(lightColors,100),
          200:getColor(lightColors,200),
          300:getColor(lightColors,300),
          400:getColor(lightColors,400),
          500:getColor(lightColors,500),
        } as PaletteColorOptionsType,
        dark:{
          main:getMainColor(darkColors),
          300:getColor(darkColors,300),
          400:getColor(darkColors,400),
          500:getColor(darkColors,500),
          600:getColor(darkColors,600),
          700:getColor(darkColors,700),
          800:getColor(darkColors,800),
          900:getColor(darkColors,900),
          950:getColor(darkColors,950),
        } as PaletteColorOptionsType,
        default:{
          main:'#f5f5f5'
        },
    }
});


export default alphaTheme;