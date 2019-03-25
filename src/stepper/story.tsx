import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, number } from '@storybook/addon-knobs'

import Stepper from './index'

const stories = storiesOf('Stepper', module)
stories.addDecorator(withKnobs)

stories.add('Default stepper', () => (
  <Stepper
    name="stepper1"
    min={number('min', Number.MIN_SAFE_INTEGER)}
    max={number('max', Number.MAX_SAFE_INTEGER)}
    step={number('step', 2)}
    value={number('value', 5)}
    increaseLabel={text('increaseLabel', 'Increment')}
    decreaseLabel={text('decreaseLabel', 'Decrement')}
    onChange={action('changed')}
    buttonSize={number('button size', 24)}
  >
    {text('children', 'Number of seats')}
  </Stepper>
))

stories.add('Stepper with formatted value', () => (
  <Stepper
    name="stepper2"
    min={number('min', 0)}
    max={number('max', 10)}
    step={number('step', 2)}
    value={number('value', 5)}
    increaseLabel={text('increaseLabel', 'Increment')}
    decreaseLabel={text('decreaseLabel', 'Decrement')}
    format={value => `${value} €`}
    onChange={action('changed')}
    buttonSize={number('button size', 24)}
  >
    {text('children', 'Edit the price')}
  </Stepper>
))

/* Tests to build */
