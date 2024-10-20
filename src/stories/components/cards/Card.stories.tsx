
import { ThemeProvider } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import CardComponent from "../../../components/cards";
import alphaTheme from "../../../theme/theme";

const meta: Meta<typeof CardComponent> = {
    component:CardComponent,
    title:'Alpha UI/Components/Cards',
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

