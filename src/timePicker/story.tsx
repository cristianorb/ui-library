import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import TimePicker from './index'

const stories = storiesOf('TimePicker', module)
stories.addDecorator(withKnobs)

stories.add('default', () => (
  <TimePicker
    name="departure-time"
    minuteStep={number('minuteStep', 30)}
    onChange={action('onChange')}
    disabled={boolean('disabled', false)}
    locale={select('locale', ['fr-FR', 'en-US', 'ru-RU'], 'fr-FR')}
    timeStart={select('timeStart', ['00:00', '08:00', '12:00', '21:00'], '00:00')}
  />
))
