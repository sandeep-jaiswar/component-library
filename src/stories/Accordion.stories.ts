import type { Meta, StoryObj } from '@storybook/react';
import Accordion from '../components/Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    allowMultiple: { control: 'boolean' },
    className: { control: 'text' },
    items: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    items: [
      {
        id: '1',
        title: 'What is an Accordion?',
        content: 'An accordion is a vertically stacked set of interactive headings that each contain a title, content snippet, or thumbnail representing a section of content.',
      },
      {
        id: '2',
        title: 'When to use Accordions?',
        content: 'Use accordions to organize related information in a limited amount of space. They are particularly useful when you want to reduce scrolling and present a large amount of information in a compact form.',
      },
      {
        id: '3',
        title: 'Accessibility Considerations',
        content: 'Ensure that accordions are keyboard accessible and properly labeled for screen readers. Use appropriate ARIA attributes to enhance the user experience for all users.',
      },
    ],
    allowMultiple: false,
  },
};

export const AllowMultiple: Story = {
  args: {
    ...Default.args,
    allowMultiple: true,
  },
};

export const WithCustomStyling: Story = {
  args: {
    ...Default.args,
    className: 'bg-gray-100 rounded-lg shadow-md',
  },
};
export const WithHTMLContent: Story = {
  args: {
    items: [
      {
        id: 'html-content',
        title: 'Rich HTML Content Example',
        content: `
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-blue-600">Features of Our Accordion</h3>
            <p>Our accordion component offers several key features:</p>
            <ul class="list-disc list-inside pl-4">
              <li>Smooth animations using Framer Motion</li>
              <li>Support for multiple open panels</li>
              <li>Customizable styling</li>
              <li>Accessibility-friendly design</li>
            </ul>
            <p>Try interacting with this accordion to see these features in action!</p>
          </div>
        `,
      },
      ...(Default.args?.items || []),
    ],
    allowMultiple: true,
  },
};