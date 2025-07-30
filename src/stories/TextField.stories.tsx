import type { Meta, StoryObj } from "@storybook/react-webpack5";
import TextField from "../components/textField/TextFiled";

const meta = {
  component: TextField,
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof TextField>;

export const DefaultTextField: Story = {
  args: {
    id: "123",
  },
};
