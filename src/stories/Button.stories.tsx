import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Button from "../components/button/Button";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  args: {
    children: "Contained Button",
    variant: "contained",
    size: "medium",
    disabled: false,
  },
};
