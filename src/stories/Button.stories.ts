import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "../components/Button";
import "../index.css";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["filled", "tinted", "gray"],
    },
    color: {
      control: { type: "select" },
      options: ["blue", "green", "red", "yellow", "gray"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    startIcon: { control: "text" },
    endIcon: { control: "text" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    variant: "filled",
    color: "blue",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    children: "Filled Button",
  },
};

export const Tinted: Story = {
  args: {
    variant: "tinted",
    children: "Tinted Button",
  },
};

export const Gray: Story = {
  args: {
    variant: "gray",
    children: "Gray Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    children: "Small Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    children: "Large Button",
  },
};

export const WithStartIcon: Story = {
  args: {
    startIcon: "→",
    children: "Button with Start Icon",
  },
};

export const WithEndIcon: Story = {
  args: {
    endIcon: "←",
    children: "Button with End Icon",
  },
};
