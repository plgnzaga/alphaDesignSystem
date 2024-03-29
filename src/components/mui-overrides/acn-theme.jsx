import { createTheme } from '@mui/material';
import {dangerColors, darkColors, lightColors, primaryColors, secondaryColors, successColors, warningColors} from '../../overrides/ColorPalettes'
import { ButtonOverrides } from './Buttons/ButtonOverrides';


const getColor = (category,value) => {
  return category.find((i) => i.shade == value ).hexCode
}
const getMainColor = (category) => {
  return category.find((i) => i.main).hexCode
}
const acnTheme = createTheme({
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
        },
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
        },
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
        },
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
        },
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
        },
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
        },
        default:{
          main:'#f5f5f5'
        },
    },
    typography:{
      fontFamily:'Graphik',
      hero1:{
        fontSize:'6rem',
        fontWeight:500,
        display:'block'
      },
      hero2:{
        fontSize:'5rem',
        fontWeight:500,
        display:'block'
      },
      hero3:{
        fontSize:'4rem',
        fontWeight:500,
        display:'block'
      },
      h1:{
        fontSize:'3rem',
        fontWeight:600
      },
      h2:{
        fontSize:'2.5rem',
        fontWeight:500
      },
      h3:{
        fontSize:'2rem',
        fontWeight:500
      },
      h4:{
        fontSize:'1.5rem',
        fontWeight:500
      },
      h5:{
        fontSize:'1.3rem',
        fontWeight:500
      },
      h6:{
        fontSize:'1.25rem',
        fontWeight:500
      },
      button: {
        textTransform: 'unset',
        fontSize:'0.85rem',
        lineHeight:'0.85rem',
        letterSpacing:'0.05rem',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: ButtonOverrides,
          textSuccess:{
            '&:hover': {
              backgroundColor: getColor(successColors,50),
              textDecoration:'underline',
              color:getMainColor(successColors)
              
            },
          },
          outlinedSuccess:{
            '&:hover': {
              backgroundColor: getMainColor(successColors),
              color:getMainColor(lightColors)
              
            },
          },
          outlinedDanger: {
            // color: '#f44336',
            borderColor: '#f44336',
            '&:hover': {
              backgroundColor: '#f44336',
              color: '#fff',
            },
            '&:active': {
              backgroundColor: '#d32f2f',
              color: '#fff',
            },
            '&:focus': {
              backgroundColor: 'white',
              color: '#fff',
            },
          },
        },
        variants: [
          {
            props:{variant:'proceed1'},
            style:{
              color:getMainColor(lightColors),
              background:getMainColor(primaryColors)
            }
          },
          {
            props: { variant: 'success' },
            style: {
              color:getMainColor(lightColors),
              backgroundColor:getMainColor(successColors),
              '&:hover': {
                backgroundColor: getColor(successColors,600)
              },
              '&:active': {
                backgroundColor: '#388e3c',
              },
            },
          },
          {
            props: { variant: 'danger' },
            style: {
              backgroundColor: '#f44336',
              '&:hover': {
                backgroundColor: '#e57373',
              },
              '&:active': {
                backgroundColor: '#d32f2f',
              },
            },
          },
          {
            props: { variant: 'warning' },
            style: {
              backgroundColor: '#ff9800',
              '&:hover': {
                backgroundColor: '#ffb74d',
              },
              '&:active': {
                backgroundColor: '#f57c00',
              },
            },
          },
        ]
      },
    },
});


export default acnTheme;