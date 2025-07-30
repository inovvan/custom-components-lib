import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Checkbox from "../components/checkbox/Checkbox";

const meta = {
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const DefaultCheckbox: Story = {
  args: {
    name: "checkbox",
    value: "checkbox",
  },
};
