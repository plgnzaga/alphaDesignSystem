
import type { Meta,StoryObj } from "@storybook/react";

import { ThemeProvider } from "@mui/material";
import alphaTheme from "../../../theme/theme";
import CustomButtonsComponent from "../../../components/buttons/customButtons";

const meta: Meta<typeof CustomButtonsComponent> = {
    component:CustomButtonsComponent,
    title:'Alpha UI/Components/Buttons/Custom',
    
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
        variant:'contained',
        color:'primary'
    }
}

