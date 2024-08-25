import { PaletteColorOptions } from "@mui/material";

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    default?: PaletteColorOptions;
    light?: PaletteColorOptions;
    dark?: PaletteColorOptions;
    danger?: PaletteColorOptions;
  }
  

}


export type PaletteColorOptionsType = PaletteColorOptions &{
  10?:string;
  30?:string;
  450?:string;
  950?:string;
}
