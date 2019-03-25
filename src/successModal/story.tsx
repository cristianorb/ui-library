import React, { Component } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import SuccessModal, { SuccessModalProps } from './index'

const stories = storiesOf('SuccessModal', module)
stories.addDecorator(withKnobs)

class SuccessModalOpener extends Component<SuccessModalProps> {
  state = {
    successModalOpen: false,
  }

  openSuccessModal = () => {
    this.setState({ successModalOpen: true })
  }

  confirmSuccessModal = () => {
    this.setState({ successModalOpen: false })
  }

  render() {
    return (
      <div>
        <button onClick={this.openSuccessModal}>Open SuccessModal</button>
        <SuccessModal
          {...this.props}
          onConfirm={this.confirmSuccessModal}
          isOpen={this.state.successModalOpen}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </SuccessModal>
      </div>
    )
  }
}

stories.add('SuccessModal', () => (
  <SuccessModalOpener
    isOpen={false}
    onConfirm={() => {}}
    imageSrc={text('imageSrc', 'https://svgshare.com/i/AGz.svg')}
    imageText={text('imageText', 'Illustation description')}
    confirmLabel={text('confirmLabel', 'Got it!')}
    large={boolean('large', false)}
    closeOnEsc={boolean('closeOnEsc', false)}
  />
))
