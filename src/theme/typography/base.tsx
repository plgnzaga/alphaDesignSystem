

export type TypographyVariants = "hero1" | "hero2" | "hero3" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "button" | "disclaimer";
export const BaseTypography = {
  fontFamily: 'Graphik !important',
  hero1: {
    fontSize: '6rem',
    fontWeight: 800,
    display: 'block'
  },
  hero2: {
    fontSize: '5rem',
    fontWeight: 500,
    display: 'block'
  },
  hero3: {
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
  large:{
    fontSize:'1.25rem'
  },
  medium:{ //16px
      fontSize:'1.15rem'
  },
  normal:{
    fontSize:'1rem'
  },
  small:{ //12px
      fontSize:'0.75rem'
  },
  button:{
    textTransform: 'capitalize',
  },
  disclaimer:{
    fontFamily: 'Graphik',
    fontSize: '0.8rem',
    color:'darkslategray'
  },
}