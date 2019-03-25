import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import Button from '~/button'
import ButtonGroup from './index'

const stories = storiesOf('ButtonGroup', module)
stories.addDecorator(withKnobs)

stories.add('Button Group - default', () => (
  <ButtonGroup
    isReverse={boolean('isReverse', false)}
    isInline={boolean('isInline', false)}
    className={text('className', 'custom-class-name')}
  >
    <Button>Hello</Button>
    <Button status={Button.STATUS.TERTIARY}>there</Button>
  </ButtonGroup>
))
