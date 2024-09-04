import type { Meta, StoryObj } from '@storybook/react';
import Form from '../components/Form';

const meta: Meta<typeof Form> = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    fields: { control: 'object' },
    onSubmit: { action: 'submitted' },
    submitLabel: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Form>;

export const LoginForm: Story = {
  args: {
    fields: [
      { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email', required: true },
      { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password', required: true },
    ],
    submitLabel: 'Log In',
  },
};

export const SignupForm: Story = {
  args: {
    fields: [
      { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter your full name', required: true },
      { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email', required: true },
      { name: 'password', label: 'Password', type: 'password', placeholder: 'Create a password', required: true },
      { name: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Confirm your password', required: true },
    ],
    submitLabel: 'Sign Up',
  },
};

export const ContactForm: Story = {
  args: {
    fields: [
      { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name', required: true },
      { name: 'email', label: 'Email', type: 'email', placeholder: 'Your email', required: true },
      { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Message subject', required: true },
      { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Your message', required: true },
    ],
    submitLabel: 'Send Message',
  },
};