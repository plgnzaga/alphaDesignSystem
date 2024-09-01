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

  export type TypographyPropsVariantType = Variant &{
    variant:"hero1" | "hero2" | "hero3" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "button" | "disclaimer";
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    hero1:true;
    hero2:true;
    hero3:true;
    disclaimer: true;
    

  }
}

