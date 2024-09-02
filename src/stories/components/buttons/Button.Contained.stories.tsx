
import type { Meta,StoryObj } from "@storybook/react";
import ButtonComponent from "../../../components/buttons";
import { ThemeProvider } from "@mui/material";
import alphaTheme from "../../../theme/theme";

const meta: Meta<typeof ButtonComponent> = {
    component:ButtonComponent,
    title:'Alpha UI/Components/Buttons/Variants/Contained',
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

export const Primary: Story = {
    args:{
        variant:'contained',
        color:'primary'
    }
}
export const Info: Story = {
    args:{
        variant:'contained',
        color:'info'
    }
}
export const Success: Story = {
    args:{
        variant:'contained',
        color:'success'
    }
}
export const Warning: Story = {
    args:{
        variant:'contained',
        color:'warning'
    }
}
export const Error: Story = {
    args:{
        variant:'contained',
        color:'error'
    }
}

