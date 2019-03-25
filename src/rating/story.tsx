import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text, number } from '@storybook/addon-knobs'

import Rating from './index'

const stories = storiesOf('Rating', module)
stories.addDecorator(withKnobs)

stories.add('Rating', () => (
  <Rating ratings={number('ratings', 0)} score={number('score', 0)}>
    {text('ratings label', 'ratings')}
  </Rating>
))
