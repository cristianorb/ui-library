import React, { Component } from 'react'
import { FocusVisibleProvider } from '_utils/focusVisible/FocusVisibleProvider'

import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Section from 'layout/section/baseSection'
import Why from 'why'

const Log = (props: { name: string }): any => {
  // eslint-disable-next-line no-console
  console.log(`rendering "${props.name}"`)
  return null
}

class LayoutExample extends Component {
  render() {
    return (
      <div>
        <FocusVisibleProvider>
          <Log name="FocusVisibleProvider" />
          <Section>
            <Log name="Section 1" />
            <ul>
              <li>
                <Why
                  onClick={action('clicked')}
                  title={text('Title', 'Why this is a text that is so long ? (new window)')}
                >
                  {text('Text', 'Why this is a text that is so long ?')}
                </Why>
              </li>
              <li>
                <button type="button">Focus provider - No consumer</button>
              </li>
            </ul>
          </Section>
        </FocusVisibleProvider>
        <Section>
          <Log name="Section 2" />
          <button type="button">No focus provider</button>
        </Section>
      </div>
    )
  }
}

const stories = storiesOf('Widgets|Why', module)
stories.addDecorator(withKnobs)

stories.add('default', () => <LayoutExample />)
