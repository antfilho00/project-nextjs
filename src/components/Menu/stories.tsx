import { Meta, Story } from '@storybook/react/types-6-0';
import { Menu, MenuProps } from '.';
import linsMocks from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linsMocks,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImage: '',
    },
  },
} as Meta;

export const Template: Story<MenuProps> = (args) => {
  return (
    <div style={{ height: '300vh', background: 'gray' }}>
      <Menu {...args} />
    </div>
  );
};
