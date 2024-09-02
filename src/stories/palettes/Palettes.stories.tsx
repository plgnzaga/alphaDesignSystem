
import type { Meta,StoryObj } from "@storybook/react";
import Palette from "../../components/pallets";
import { dangerColors, darkColors, lightColors, primaryColors, secondaryColors, successColors, warningColors } from "../../theme/palettes";

const meta: Meta<typeof Palette> = {
    component:Palette,
    title:'Alpha UI/Palettes',
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args:{
        colorScheme:primaryColors
    }
}
export const Secondary: Story = {
    args:{
        colorScheme:secondaryColors
    }
}
export const Success: Story = {
    args:{
        colorScheme:successColors
    }
}
export const Warning: Story = {
    args:{
        colorScheme:warningColors
    }
}
export const Danger: Story = {
    args:{
        colorScheme:dangerColors
    }
}
export const Light: Story = {
    args:{
        colorScheme:lightColors
    }
}
export const Dark: Story = {
    args:{
        colorScheme:darkColors
    }
}