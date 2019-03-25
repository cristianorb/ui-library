import React, { Component, createRef } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import Modal, { ModalProps } from './index'

const stories = storiesOf('Modal', module)
stories.addDecorator(withKnobs)

class ModalOpener extends Component<ModalProps> {
  state = {
    modalOpen: false,
    modalOpen2: false,
  }

  openModal = () => {
    this.setState({ modalOpen: true })
  }

  closeModal = () => {
    this.setState({ modalOpen: false })
  }

  openModal2 = () => {
    this.setState({ modalOpen2: true })
  }

  closeModal2 = () => {
    this.setState({ modalOpen2: false })
  }

  ref = createRef<HTMLDivElement>()

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open modal 1</button>
        <button onClick={this.openModal2}>Open modal 2</button>
        <Modal {...this.props} close={this.closeModal} isOpen={this.state.modalOpen} ref={this.ref}>
          <div>
            <h1>Modal 1</h1>
            <img src="http://placekitten.com/g/216/144" width="216" height="144" alt="" />
          </div>
        </Modal>

        <Modal {...this.props} close={this.closeModal2} isOpen={this.state.modalOpen2}>
          <div>
            <h1>Modal 2</h1>
            <img src="http://placekitten.com/g/216/144" width="216" height="144" alt="" />
          </div>
        </Modal>
      </div>
    )
  }
}

stories.add('default', () => (
  <ModalOpener
    close={() => {}}
    closeOnEsc={boolean('closeOnEsc', true)}
    closeOnOutsideClick={boolean('closeOnOutsideClick', true)}
    fullscreen={boolean('fullscreen', false)}
    displayDimmer={boolean('displayDimmer', true)}
    large={boolean('large', false)}
    isOpen={false}
  />
))

stories.add('fullscreen', () => (
  <ModalOpener
    fullscreen={boolean('fullscreen', true)}
    displayDimmer={boolean('displayDimmer', false)}
    close={() => {}}
    closeOnEsc={boolean('closeOnEsc', true)}
    closeOnOutsideClick={boolean('closeOnOutsideClick', false)}
    displayCloseButton={boolean('displayCloseButton', true)}
    isOpen={false}
  />
))
