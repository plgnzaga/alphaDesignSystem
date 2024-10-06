import { ThemeProvider } from "@mui/material";
import type { Preview } from "@storybook/react";
import alphaTheme from "../src/theme/theme"
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story:any) => (
      <ThemeProvider theme={alphaTheme}>
                <Story />
            </ThemeProvider>
    ),
  ],
};

export default preview;
