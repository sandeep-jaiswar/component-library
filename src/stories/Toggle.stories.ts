import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Toggle from "../components/Toggle";
import "../index.css";

const meta = {
  title: "Components/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    defaultOn: {
      control: "boolean",
    },
    onChange: { action: "changed" },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultOn: false,
    onChange: fn(),
  },
};

export const On: Story = {
  args: {
    defaultOn: true,
    onChange: fn(),
  },
};

export const WithCustomOnChange: Story = {
  args: {
    defaultOn: false,
    onChange: (isOn: boolean) => console.log(`Toggle changed to: ${isOn}`),
  },
};

// Note: Size and disabled are not part of the Toggle component props
// If you want to add these features, you'll need to modify the Toggle component first
