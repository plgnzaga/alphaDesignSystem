import type { Meta,StoryObj } from "@storybook/react";

import { ThemeProvider } from "@mui/material";
import alphaTheme from "../../../theme/theme";
import AlertComponent from "../../../components/alerts";

const meta: Meta<typeof AlertComponent> = {
    component:AlertComponent,
    title:'Alpha UI/Components/Alert/Variants/Filled',
    
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

export const Base: Story = {
    args:{
        variant:'filled'
    }
}

