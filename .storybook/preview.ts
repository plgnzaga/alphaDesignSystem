
import type { Decorator, Preview, StoryFn } from "@storybook/react";
import alphaTheme from "../src/theme/theme"
import React from 'react';
import { ThemeProvider } from '@mui/material/styles'

const preview: Preview = {
  parameters: { 
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
 
};

export default preview;



