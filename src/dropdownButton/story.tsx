import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Avatar from '~/avatar'
import DropdownButton from './index'

const stories = storiesOf('DropdownButton', module)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <DropdownButton onClick={action('onClick')} open={boolean('open', false)}>
    <Avatar />
  </DropdownButton>
))
