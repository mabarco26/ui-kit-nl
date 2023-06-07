import { Button } from './Button';


export default {
  title: 'Atoms/Button/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};


export const Primary = {
  args: {
    variant: 'primary',
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
