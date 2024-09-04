import type { Meta, StoryObj } from '@storybook/react';
import Pagination from '../components/Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    totalPages: { control: { type: 'number', min: 1, max: 100 } },
    showFirstLast: { control: 'boolean' },
    currentPage: { control: { type: 'number', min: 1 } },
    onPageChange: { action: 'page changed' },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    totalPages: 10,
    showFirstLast: true,
    currentPage: 1,
  },
};

export const ManyPages: Story = {
  args: {
    totalPages: 50,
    showFirstLast: true,
    currentPage: 1,
  },
};

export const WithoutFirstLast: Story = {
  args: {
    totalPages: 10,
    showFirstLast: false,
    currentPage: 1,
  },
};

export const FewPages: Story = {
  args: {
    totalPages: 3,
    showFirstLast: true,
    currentPage: 1,
  },
};