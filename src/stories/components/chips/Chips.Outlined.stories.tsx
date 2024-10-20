import type { Meta,StoryObj } from "@storybook/react";
import { ThemeProvider } from "@mui/material";
import alphaTheme from "../../../theme/theme";
import ChipComponent from "../../../components/chip";

const meta: Meta<typeof ChipComponent> = {
    component:ChipComponent,
    title:'Alpha UI/Components/Chip/Variants/Outlined',
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
        variant:'outlined'
    }
}

