
import type { Meta,StoryObj } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import alphaTheme from "../../../theme/theme";
import Navbar from "../../../components/navbar";
import { fn } from "@storybook/test";

const meta: Meta<typeof Navbar> = {
    component:Navbar,
    title:'Alpha UI/Components/Navbar',
    
    decorators: [
        (Story) => (
            <ThemeProvider theme={alphaTheme}>
                <Story />
            </ThemeProvider>
        ),
    ],
    args: { onClick: fn() },
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args:{
      
    },
    
}

