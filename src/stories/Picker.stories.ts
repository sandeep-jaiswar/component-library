import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import DatePicker from "../components/Picker";
import "../index.css";

const meta = {
  title: "Components/DatePicker",
  component: DatePicker,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onChange: { action: "date changed" },
    initialDate: { control: "date" },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onChange: fn(),
  },
};

export const WithInitialDate: Story = {
  args: {
    onChange: fn(),
    initialDate: new Date("2023-06-15"),
  },
};

export const WithCustomOnChange: Story = {
  args: {
    onChange: (date: Date) => console.log(`Date changed to: ${date.toISOString()}`),
  },
};
