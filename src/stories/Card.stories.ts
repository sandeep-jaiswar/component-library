import type { Meta, StoryObj } from '@storybook/react';
import Card from '../components/Card';
import Button from '../components/Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    children: { control: 'text' },
    imageUrl: { control: 'text' },
    footer: { control: 'text' },
    onClick: { action: 'clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    children: 'This is some example content for the card. It demonstrates a basic card layout without an image.',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Card with Image',
    children: 'This card includes an image at the top, showcasing how images can be incorporated into the card design.',
    imageUrl: 'https://picsum.photos/seed/picsum/800/600',
  },
};

// export const WithFooter: Story = {
//   args: {
//     title: 'Card with Footer',
//     children: 'This card demonstrates how a footer can be added to provide additional actions or information.',
//     footer: (
//       <div className="flex justify-end space-x-2">
//         <Button>Cancel</Button>
//         <Button>Confirm</Button>
//       </div>
//     ),
//   },
// };

export const Clickable: Story = {
  args: {
    title: 'Clickable Card',
    children: 'This card can be clicked to trigger an action. Try clicking on it!',
    onClick: () => alert('Card clicked!'),
  },
};