import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'

import ToggleButton from './index'

const stories = storiesOf('ToggleButton', module)
stories.addDecorator(withKnobs)

stories.add('ToggleButton', () => (
  <ToggleButton
    name="toggle"
    onChange={action('ToggleButton changed')}
    checked={boolean('Checked', false)}
    disabled={boolean('Disabled', false)}
    label={text('Label', 'Label')}
    sublabel={text('Sub label', 'Sublabel')}
    status={select('status', ToggleButton.STATUS, ToggleButton.STATUS.DEFAULT)}
  />
))
