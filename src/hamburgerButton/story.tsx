import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import HamburgerButton from './index'

const stories = storiesOf('HamburgerButton', module)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <HamburgerButton onClick={action('onClick')} open={boolean('open', false)} />
))
