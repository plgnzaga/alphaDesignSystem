import { PaletteColorOptions } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import React from "react";

// declare module '@mui/material/styles/createPalette' {
  
  

// }
export type PaletteColorOptionsType = PaletteColorOptions &{
  10?:string;
  30?:string;
  450?:string;
  950?:string;
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    lineHeight?:string,
    hero1?:React.CSSProperties;
    hero2?:React.CSSProperties;
    hero3?:React.CSSProperties;
    normal: React.CSSProperties;
    small: React.CSSProperties;
    medium?: React.CSSProperties;
    disclaimer?: React.CSSProperties;
    
  }

  interface TypographyVariantsOptions {
    lineHeight?:string,
    hero1?:React.CSSProperties;
    hero2?:React.CSSProperties;
    hero3?:React.CSSProperties;
    normal?: React.CSSProperties;
    small?: React.CSSProperties;
    medium?: React.CSSProperties;
    disclaimer?: React.CSSProperties;
  }

  interface PaletteOptions {
    default?: PaletteColorOptions;
    light?: PaletteColorOptions;
    dark?: PaletteColorOptions;
    danger?: PaletteColorOptions;
  }

  type TypographyPropsVariantType = Variant &{
    variant:"hero1" | "hero2" | "hero3" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "large" | "medium" |"normal" |"small" | "button" | "disclaimer";
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    hero1:true;
    hero2:true;
    hero3:true;
    large:true;
    medium:true;
    normal:true;
    small:true;
    button:true;
    disclaimer: true;
  }
}


declare module '@mui/material/Button' {
 interface ButtonOwnProps{
  buttontype?:string
 }
 export interface ButtonPropsColorOverrides{
  primary:true;
  secondary:true;
  success:true;
  warning:true;
  
 }
}
