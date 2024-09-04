import type { Meta, StoryObj } from '@storybook/react';
import Alert from '../components/Alert'; // Adjust the import path as needed

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'warning', 'error', 'info'],
    },
    title: { control: 'text' },
    message: { control: 'text' },
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
    message: 'Operation completed successfully!',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    message: 'Please proceed with caution.',
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    title: 'Error',
    message: 'An error occurred. Please try again.',
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    title: "Information",
    message: `Here's some useful information.`,
  },
};

export const Closable: Story = {
  args: {
    variant: 'info',
    title: 'Closable Alert',
    message: 'You can close this alert.',
    onClose: () => console.log('Alert closed'),
  },
};