import { configure, addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

addParameters({
  options: {
    showRoots: false,
  },
});

addDecorator(withA11y);
addDecorator(withKnobs);

configure(  [
    require.context('../packages/components', true, /\.stories\.js$/),
    require.context('../packages/tokens', true, /\.stories\.js$/),
  ], module
);
