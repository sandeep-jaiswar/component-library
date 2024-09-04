import type { Meta, StoryObj } from "@storybook/react";
import Input from "../components/Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    type: {
      control: "select",
      options: ["text", "password", "email", "number"],
    },
    disabled: { control: "boolean" },
    error: { control: "text" },
    onChange: { action: "changed" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Default Input",
    placeholder: "Enter text...",
  },
};

export const WithError: Story = {
  args: {
    label: "Input with Error",
    placeholder: "Enter text...",
    error: "This field is required",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "This input is disabled",
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    label: "Password Input",
    placeholder: "Enter password",
    type: "password",
  },
};

export const Email: Story = {
  args: {
    label: "Email Input",
    placeholder: "Enter email",
    type: "email",
  },
};

export const Number: Story = {
  args: {
    label: "Number Input",
    placeholder: "Enter number",
    type: "number",
  },
};
