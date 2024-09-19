
import type { Meta,StoryObj } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import alphaTheme from "../../../theme/theme";
import ActionDialog from "../../../components/dialog";

const meta: Meta<typeof ActionDialog> = {
    component:ActionDialog,
    title:'Alpha UI/Components/Dialog',
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
      
    }
}

