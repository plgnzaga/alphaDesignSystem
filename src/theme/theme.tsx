import { createTheme } from '@mui/material';
import { ColorScheme, dangerColors, darkColors, infoColors, lightColors, primaryColors, secondaryColors, successColors, warningColors } from './palettes/index'
import { PaletteColorOptionsType } from '../@types/mui';
import { BorderColor } from '@mui/icons-material';

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
  },
  typography: {
    fontFamily: 'Graphik',
    hero1: {
      fontFamily: 'Graphik',
      fontSize: '6rem',
      fontWeight: 800,
      display: 'block'
    },
    hero2: {
      fontFamily: 'Graphik',
      fontSize: '5rem',
      fontWeight: 500,
      display: 'block'
    },
    hero3: {
      fontFamily: 'Graphik',
      fontSize: '4rem',
      fontWeight: 500,
      display: 'block'
    },
    h1: {
      fontSize: '3rem',
      fontWeight: 600
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 500
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 500
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500
    },
    h5: {
      fontSize: '1.3rem',
      fontWeight: 500
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 500
    },
    button:{
      textTransform: 'capitalize',
    },
    disclaimer:{
      fontFamily: 'Graphik',
      fontSize: '0.8rem',
      color:'darkslategray'
    },
  },
  components:{
    MuiButton:{
      styleOverrides:{
        root:{
          fontWeight:600,
          letterSpacing:'0.75px',
          boxShadow:'0px 3px 6px 0px rgba(140, 149, 159, 0.15);',
          textTransform:'capitalize',
          '&:hover':{
            boxShadow:'0px 3px 6px 0px rgba(140, 149, 159, 0.15);',
          }
        },
      },
      defaultProps: {
        variant: 'contained',
      },
      variants:[
        {
          props: { variant: "contained", color:"warning"},
          style: {
            background: getMainColor(warningColors),
            color:getColorDetail(warningColors,700)?.hexCode,
            fontWeight:600,
            '&:hover':{
              color: getColorDetail(warningColors,700)?.hexCode,
              background: getColorDetail(warningColors,200)?.hexCode
            }
          },
        },
        
        //outlined
        {
          props: { variant: "outlined", },
          style: {
            border:'2px solid',
            fontWeight:600,
            '&:hover':{
              border:'2px solid',
              fontWeight:600,
            }
          },
        },
        {
          props: { variant: "outlined", color:"warning"},
          style: {
            borderColor: getMainColor(warningColors),
            color:getColorDetail(warningColors,600)?.hexCode
          },
        },
        {
          props: { variant: "outlined", color:"light"},
          style: {
            borderColor: '#f5f5f5',
            color:'gray',
            boxShadow:' 10px 10px 30px #ededed, -10px -10px 30px #ffffff'
          },
        }
      ]
    }
  }
});


export default alphaTheme;