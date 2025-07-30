import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Switch from "../components/switch/Switch";

const meta = {
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

export const DefaultSwitch: Story = {
  args: {
    name: "switch",
    value: "switch",
  },
};
