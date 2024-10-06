import { createTheme } from '@mui/material';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import BaseAppBar from './components/appbar/base';
import { BaseMuiButton } from './components/buttons/base';
import { BasePalette } from './palettes/base';
import { BaseTypography } from './typography/base';
import { Typography, TypographyOptions } from '@mui/material/styles/createTypography';
import { BaseComponents } from './components/base';


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