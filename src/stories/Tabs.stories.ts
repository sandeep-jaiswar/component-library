import type { Meta, StoryObj } from '@storybook/react';
import Tabs from '../components/Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    tabs: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    tabs: [
      {
        label: 'Tab 1',
        content: 'This is the content for Tab 1',
      },
      {
        label: 'Tab 2',
        content: 'This is the content for Tab 2',
      },
      {
        label: 'Tab 3',
        content: 'This is the content for Tab 3',
      },
    ],
  },
};

export const WithCustomContent: Story = {
  args: {
    tabs: [
      {
        label: 'Profile',
        content: `
          <div>
            <h3 class="text-lg font-semibold mb-2">User Profile</h3>
            <p>Name: John Doe</p>
            <p>Email: john@example.com</p>
            <p>Role: Administrator</p>
          </div>
        `,
      },
      {
        label: 'Settings',
        content: `
          <div>
            <h3 class="text-lg font-semibold mb-2">User Settings</h3>
            <ul class="list-disc list-inside">
              <li>Enable notifications</li>
              <li>Dark mode</li>
              <li>Language preferences</li>
            </ul>
          </div>
        `,
      },
      {
        label: 'Activity',
        content: `
          <div>
            <h3 class="text-lg font-semibold mb-2">Recent Activity</h3>
            <ul class="space-y-2">
              <li>Logged in - 2 hours ago</li>
              <li>Updated profile - 1 day ago</li>
              <li>Changed password - 3 days ago</li>
            </ul>
          </div>
        `,
      },
    ],
  },
};

export const ManyTabs: Story = {
  args: {
    tabs: Array.from({ length: 8 }, (_, i) => ({
      label: `Tab ${i + 1}`,
      content: `This is the content for Tab ${i + 1}`,
    })),
  },
};