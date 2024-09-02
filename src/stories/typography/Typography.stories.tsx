
import type { Meta,StoryObj } from "@storybook/react";
import TypographyComponent from "../../components/typography";
import { ThemeProvider } from "@mui/material";
import alphaTheme from "../../theme/theme";


const meta: Meta<typeof TypographyComponent> = {
    component:TypographyComponent,
    title:'Alpha UI/Typography',
    decorators: [
        (Story) => (
            <ThemeProvider theme={alphaTheme}>
                <Story />
            </ThemeProvider>
        ),
    ],
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Variants: Story = {
    args:{
        
    }
}
