import { getColor, getMainColor } from "../common/functions";
import { PaletteColorOptionsType } from "../mui";

export type ColorScheme = {
    shade:number,
    hexCode:string,
    textColor:string,
    colorGroup:string,
    main?:boolean
}
export const primaryColors:Partial<ColorScheme>[] = [
  { shade: 300, hexCode: '#e1a5ff', textColor: '#282828',colorGroup:'Purple'},
  { shade: 400, hexCode: '#ce6cff', textColor: '#fefefe',colorGroup:'Purple'},
  { shade: 500, hexCode: '#bc35ff', textColor: '#fefefe',colorGroup:'Purple'},
  { shade: 600, hexCode: '#ac0fff', textColor: '#fefefe',colorGroup:'Purple'},
  { shade: 700, hexCode: '#a100ff', textColor: '#fefefe',colorGroup:'Purple',main:true },
  { shade: 800, hexCode: '#8006c3', textColor: '#fefefe',colorGroup:'Purple'},
  { shade: 900, hexCode: '#69079c', textColor: '#fefefe',colorGroup:'Purple'},
  { shade: 950, hexCode: '#480076', textColor: '#fefefe',colorGroup:'Purple'},
];

export const secondaryColors: Partial<ColorScheme>[] = [
    { shade: 100, hexCode: '#f8e7ff', textColor: '#fefefe',colorGroup:'Pink'},
    { shade: 200, hexCode: '#efceff', textColor: '#fefefe',colorGroup:'Pink'},
    { shade: 300, hexCode: '#e7a7ff', textColor: '#282828',colorGroup:'Pink'},
    { shade: 400, hexCode: '#d972ff', textColor: '#fefefe',colorGroup:'Pink',main:true},
    { shade: 500, hexCode: '#c63ef7', textColor: '#fefefe',colorGroup:'Pink'},
    { shade: 600, hexCode: '#ac1edb', textColor: '#fefefe',colorGroup:'Pink' },
    { shade: 700, hexCode: '#9215b6', textColor: '#fefefe',colorGroup:'Pink'},
    { shade: 800, hexCode: '#791395', textColor: '#fefefe',colorGroup:'Pink'},
    
];

export const successColors: Partial<ColorScheme>[] =  [
    { shade: 50, hexCode: '#edfcf4', textColor: '#fefefe',colorGroup:'Green'},
    { shade: 100, hexCode: '#dbf6e3', textColor: '#fefefe',colorGroup:'Green'},
    { shade: 200, hexCode: '#aeeccb', textColor: '#282828',colorGroup:'Green'},
    { shade: 300, hexCode: '#78ddae', textColor: '#282828',colorGroup:'Green'},
    { shade: 400, hexCode: '#42c58c', textColor: '#fefefe',colorGroup:'Green'},
    { shade: 500, hexCode: '#23c483', textColor: '#fefefe',colorGroup:'Green',main:true},
    { shade: 600, hexCode: '#15a44f', textColor: '#fefefe',colorGroup:'Green'},
    { shade: 700, hexCode: '#148141', textColor: '#fefefe',colorGroup:'Green'},
]


export const warningColors: Partial<ColorScheme>[] = [
    {shade:50, hexCode:'#ffffe7', textColor:'#282828',colorGroup:'Yellow'},
    {shade:100, hexCode:'#feffc1', textColor:'#282828',colorGroup:'Yellow'},
    {shade:200, hexCode:'#fffd86', textColor:'#282828',colorGroup:'Yellow'},
    {shade:300, hexCode:'#fff441', textColor:'#282828',colorGroup:'Yellow'},
    {shade:400, hexCode:'#ffe60d', textColor:'#282828',colorGroup:'Yellow'},
    {shade:500, hexCode:'#fed600', textColor:'#282828',colorGroup:'Yellow',main:true},
    {shade:600, hexCode:'#d19e00', textColor:'#282828',colorGroup:'Yellow'},
    {shade:700, hexCode:'#a67102',textColor:'#282828',colorGroup:'Yellow'}
];
  
export const dangerColors: Partial<ColorScheme>[] =  [
    {shade:300, hexCode:'#ffa0aa', textColor:'#282828',colorGroup:'Red'},
    {shade:400, hexCode:'#ff6b7e', textColor:'#fefefe',colorGroup:'Red'},
    {shade:500, hexCode:'#dd3f57', textColor:'#fefefe',colorGroup:'Red',main:true},
    {shade:600, hexCode:'#cc3251', textColor:'#fefefe',colorGroup:'Red'},
    {shade:700, hexCode:'#ab2543', textColor:'#fefefe',colorGroup:'Red'},
    {shade:800, hexCode:'#90213e', textColor:'#fefefe',colorGroup:'Red'},
    {shade:900, hexCode:'#7b203a', textColor:'#fefefe',colorGroup:'Red'},
    {shade:950, hexCode:'#440d1b', textColor:'#fefefe',colorGroup:'Red'},
];

export const infoColors: Partial<ColorScheme>[] = [
    { shade: 300, hexCode: '#88dbff', textColor: '#282828',colorGroup:'Blue'},
    { shade: 400, hexCode: '#50c5ff', textColor: '#fefefe',colorGroup:'Blue'},
    { shade: 500, hexCode: '#28a7ff', textColor: '#fefefe',colorGroup:'Blue'},
    { shade: 600, hexCode: '#1e90ff', textColor: '#fefefe',colorGroup:'Blue',main:true },
    { shade: 700, hexCode: '#0a71eb', textColor: '#fefefe',colorGroup:'Blue'},
    { shade: 800, hexCode: '#0f5abe', textColor: '#fefefe',colorGroup:'Blue'},
    { shade: 900, hexCode: '#134e95', textColor: '#fefefe',colorGroup:'Blue'},
    { shade: 950, hexCode: '#11305a', textColor: '#fefefe',colorGroup:'Blue'},
];
export const lightColors: Partial<ColorScheme>[] =  [
    {shade:10, hexCode:'#fbfbfc', textColor:'#282828',colorGroup:'Light',main:true},
    {shade:30, hexCode:'#f9fafb', textColor:'#282828',colorGroup:'Light'},
    {shade:50, hexCode:'#f8f9fa', textColor:'#282828',colorGroup:'Light'},
    {shade:100, hexCode:'#eceff2', textColor:'#282828',colorGroup:'Light'},
    {shade:200, hexCode:'#d5dde2', textColor:'#282828',colorGroup:'Light'},
    {shade:300, hexCode:'#b0bfc9', textColor:'#282828',colorGroup:'Light'},
    {shade:400, hexCode:'#a0afba', textColor:'#282828',colorGroup:'Light'},
    {shade:500, hexCode:'#959596', textColor:'#fefefe',colorGroup:'Light'},
];

export const darkColors: Partial<ColorScheme>[] =  [
    {shade:300, hexCode:'#a4a4a4', textColor:'#fefefe',colorGroup:'Dark'},
    {shade:400, hexCode:'#818181', textColor:'#fefefe',colorGroup:'Dark'},
    {shade:500, hexCode:'#666666', textColor:'#fefefe',colorGroup:'Dark'},
    {shade:600, hexCode:'#515151', textColor:'#fefefe',colorGroup:'Dark'},
    {shade:700, hexCode:'#434343', textColor:'#fefefe',colorGroup:'Dark'},
    {shade:800, hexCode:'#383838', textColor:'#fefefe',colorGroup:'Dark'},
    {shade:900, hexCode:'#282828', textColor:'#fefefe',colorGroup:'Dark'},
    {shade:950, hexCode:'#1a1a1a', textColor:'#fefefe',colorGroup:'Dark',main:true},
];

export const BasePalette = {
    primary: {
      main: getMainColor(primaryColors),
      300: getColor(primaryColors, 300),
      400: getColor(primaryColors, 400),
      500: getColor(primaryColors, 500),
      600: getColor(primaryColors, 600),
      700: getColor(primaryColors, 700),
      800: getColor(primaryColors, 800),
      900: getColor(primaryColors, 900),
      950: getColor(primaryColors, 950),
      contrastText: getMainColor(lightColors),
    } as PaletteColorOptionsType,
    secondary: {
      main: getMainColor(secondaryColors),
      300: getColor(secondaryColors, 300),
      400: getColor(secondaryColors, 400),
      500: getColor(secondaryColors, 500),
      600: getColor(secondaryColors, 600),
      700: getColor(secondaryColors, 700),
      800: getColor(secondaryColors, 800),
      900: getColor(secondaryColors, 900),
      950: getColor(secondaryColors, 950),
      contrastText: getMainColor(lightColors),
    } as PaletteColorOptionsType,
    success: {
      main: getMainColor(successColors),
      50: getColor(successColors, 50),
      100: getColor(successColors, 100),
      200: getColor(successColors, 200),
      300: getColor(successColors, 300),
      400: getColor(successColors, 400),
      500: getColor(successColors, 500),
      600: getColor(successColors, 600),
      700: getColor(successColors, 700),
      contrastText: getMainColor(lightColors)
    },
    warning: {
      main: getMainColor(warningColors),
      50: getColor(warningColors, 50),
      100: getColor(warningColors, 100),
      200: getColor(warningColors, 200),
      300: getColor(warningColors, 300),
      400: getColor(warningColors, 400),
      450: getColor(warningColors, 450),
      500: getColor(warningColors, 500),
      600: getColor(warningColors, 600),
    } as PaletteColorOptionsType,
    error: {
      main: getMainColor(dangerColors),
      300: getColor(dangerColors, 300),
      400: getColor(dangerColors, 400),
      500: getColor(dangerColors, 500),
      600: getColor(dangerColors, 600),
      700: getColor(dangerColors, 700),
      800: getColor(dangerColors, 800),
      900: getColor(dangerColors, 900),
      950: getColor(dangerColors, 950),
      contrastText: getMainColor(lightColors),
    } as PaletteColorOptionsType,
    info: {
      main: getMainColor(infoColors),
      300: getColor(infoColors, 300),
      400: getColor(infoColors, 400),
      500: getColor(infoColors, 500),
      600: getColor(infoColors, 600),
      700: getColor(infoColors, 700),
      800: getColor(infoColors, 800),
      900: getColor(infoColors, 900),
      950: getColor(infoColors, 950),
      contrastText: getMainColor(lightColors),
    } as PaletteColorOptionsType,
    light: {
      main: getMainColor(lightColors),
      10: getColor(lightColors, 10),
      30: getColor(lightColors, 30),
      50: getColor(lightColors, 50),
      100: getColor(lightColors, 100),
      200: getColor(lightColors, 200),
      300: getColor(lightColors, 300),
      400: getColor(lightColors, 400),
      500: getColor(lightColors, 500),
      contrastText: '#282828',
    } as PaletteColorOptionsType,
    dark: {
      main: getMainColor(darkColors),
      300: getColor(darkColors, 300),
      400: getColor(darkColors, 400),
      500: getColor(darkColors, 500),
      600: getColor(darkColors, 600),
      700: getColor(darkColors, 700),
      800: getColor(darkColors, 800),
      900: getColor(darkColors, 900),
      950: getColor(darkColors, 950),
      contrastText: getMainColor(lightColors),
    } as PaletteColorOptionsType,
    default: {
      main: '#f5f5f5'
    },
  }
