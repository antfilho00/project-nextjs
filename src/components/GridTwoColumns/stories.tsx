import { Meta, Story } from '@storybook/react/types-6-0';
import { GridTwoColumns, GridTwoColumnsProps } from '.';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: {
    title: 'Grid Two Columns',
    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, asperiores quisquam modi sit autem architecto. Magni, adipisci totam. Officiis nulla incidunt libero mollitia dolores in possimus suscipit illum nisi? Aspernatur.`,
    srcImg: 'assets/images/javascript.svg',
  },
} as Meta;

export const Template: Story<GridTwoColumnsProps> = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
