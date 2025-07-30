import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Select from "../components/select/Select";
import MenuItem from "../components/menuItem/MenuItem";

const meta = {
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const DefaultSelect: Story = {
  args: {
    id: "123",
    children: [
      <MenuItem key={1} value="1">
        One
      </MenuItem>,
      <MenuItem key={2} value="2">
        Two
      </MenuItem>,
      <MenuItem key={3} value="3">
        Three
      </MenuItem>,
    ],
  },
};
