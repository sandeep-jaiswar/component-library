import type { Meta, StoryObj } from "@storybook/react";
import Spacer from "../components/Spacer";

const meta: Meta<typeof Spacer> = {
  title: "Components/Spacer",
  component: Spacer,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: 'number' },
      description: 'Size of the spacer (in multiples of 0.25rem)',
    },
    axis: {
      control: { type: 'radio', options: ['horizontal', 'vertical'] },
      description: 'Axis of the spacer',
    },
    grow: {
      control: 'boolean',
      description: 'Whether the spacer should grow to fill available space',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spacer>;

export const Default: Story = {
  args: {
    size: 4,
    axis: 'vertical',
    grow: false,
  },
};

export const Horizontal: Story = {
  args: {
    size: 8,
    axis: 'horizontal',
    grow: false,
  },
};

export const Growing: Story = {
  args: {
    size: 4,
    axis: 'vertical',
    grow: true,
  },
};

export const CustomSize: Story = {
  args: {
    size: 12,
    axis: 'vertical',
    grow: false,
  },
};
