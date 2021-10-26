import { Meta, Story } from '@storybook/react/types-6-0';
import { TextComponent, TextComponentProps } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Iusto mollitia dolorum voluptatem. Doloremque, minima molestiae?
      Et expedita, voluptas ipsam, totam molestiae, blanditiis ratione veniam sapiente
      earum laborum iste dicta ipsum.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
} as Meta;

export const Template: Story<TextComponentProps> = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
