import React from 'react'

import { storiesOf } from '@storybook/react'
import { text, withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import SelectField from './index'

const stories = storiesOf('SelectField', module)
stories.addDecorator(withKnobs)

const phonePrefixOptions = [
  { value: '+33', label: 'Fr +33', ariaLabel: 'France' },
  { value: '+34', label: 'Sp +34' },
]

stories.add('Default', () => (
  <SelectField
    id={text('id', 'selectFieldId')}
    name={text('name', 'selectFieldName')}
    className={text('className', 'additionalClass')}
    options={phonePrefixOptions}
    ariaLabel={text('ariaLabel', 'selectLabel')}
    defaultValue={text('defaultValue', phonePrefixOptions[0].value)}
    onChange={action('changed')}
    disabled={boolean('disabled', false)}
    required={boolean('required', false)}
    autoFocus={boolean('autoFocus', false)}
  />
))
