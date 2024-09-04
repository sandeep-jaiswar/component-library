import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from '../components/Tooltip';
import Button from '../components/Button';
import React from 'react';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
    position: {
      control: {
        type: 'select',
        options: ['top', 'bottom', 'left', 'right'],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    position: 'top',
  },
  render: (args) => (
    <div className="h-64 flex items-center justify-center">
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  ),
};

export const LongContent: Story = {
  args: {
    ...Default.args,
    content: 'This is a tooltip with longer content to demonstrate how it wraps.',
  },
};

export const BottomPosition: Story = {
  args: {
    ...Default.args,
    content: 'Tooltip on bottom',
    position: 'bottom',
  },
};

export const LeftPosition: Story = {
  args: {
    ...Default.args,
    content: 'Tooltip on left',
    position: 'left',
  },
};

export const RightPosition: Story = {
  args: {
    ...Default.args,
    content: 'Tooltip on right',
    position: 'right',
  },
};