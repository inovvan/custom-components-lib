import type { Meta, StoryObj } from "@storybook/react-webpack5";
import Modal from "../components/modal/Modal";

const meta = {
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const DefaultModal: Story = {
  args: {
    isOpen: false,
    children: <p>Modal opened via button</p>,
  },
};
