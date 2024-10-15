import { createTheme } from '@mui/material';
import { TypographyOptions } from '@mui/material/styles/createTypography';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { BaseComponents } from './components/base';
import { BasePalette } from './palettes/base';
import { BaseTypography } from './typography/base';


export const reactSvgComponentToMarkupString = (Component: any, props: any) =>
  `data:image/svg+xml,${encodeURIComponent(
    renderToStaticMarkup(createElement(Component, props))
  )}`;


const alphaTheme = createTheme({
  palette: BasePalette,
  typography: BaseTypography as TypographyOptions,
  components: BaseComponents
});


export default alphaTheme;