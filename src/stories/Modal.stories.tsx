import type { Meta, StoryObj } from '@storybook/react';
import Modal from '../components/Modal';
import Button from '../components/Button';
import React from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    children: { control: 'text' },
    footer: { control: 'text' },
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    title: 'Modal Title',
    children: 'This is the content of the modal. You can put any React components or HTML here.',
    isOpen: true,
  },
  render: (args) => (
    <>
      <Button onClick={() => {}}>Open Modal</Button>
      <Modal {...args} />
    </>
  ),
};

export const WithFooter: Story = {
  args: {
    ...Default.args,
    title: 'Modal with Footer',
    children: 'This modal has a footer with action buttons.',
    footer: (
      <>
        <Button variant="gray">Cancel</Button>
        <Button>Confirm</Button>
      </>
    ),
  },
};

export const LongContent: Story = {
  args: {
    ...Default.args,
    title: 'Modal with Long Content',
    children: (
      <div className="max-h-96 overflow-y-auto">
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} className="mb-4">
            This is paragraph {i + 1} with some long content to demonstrate scrolling within the modal.
          </p>
        ))}
      </div>
    ),
  },
};