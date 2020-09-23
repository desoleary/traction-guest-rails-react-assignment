import React from 'react';
import App from '../App';
import { Meta } from '@storybook/react/types-6-0';

export default {
  title: 'App',
  component: App,
  argTypes: {},
} as Meta;

const Template = (args: JSX.IntrinsicAttributes) => <App {...args} />;

// Each story then reuses that template
export const Primary = Template.bind({});
