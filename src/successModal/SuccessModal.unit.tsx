import React from 'react'
import { shallow, mount } from 'enzyme'

import SuccessModal from 'successModal'

const defaultProps = {
  isOpen: false,
  confirmLabel: 'Confirm',
  imageSrc: 'https://svgshare.com/i/AGz.svg',
  imageText: 'Illustration description',
  closeOnEsc: true,
}

describe('<SuccessModal>', () => {
  let mockClose
  let wrapper
  let wrapperOpen

  // beforeEach(() => {})

  it('Should be not visible if isOpen is set to false', () => {
    wrapper = shallow(<SuccessModal isOpen={false} {...defaultProps} />)
    expect(wrapper.find('[data-test="success-modal"]').exists()).toBe(false)
  })

  it('Should be visible if isOpen is set to true', () => {
    mockClose = jest.fn()
    wrapperOpen = mount(
      <SuccessModal {...defaultProps} isOpen onClose={mockClose}>
        Success description
      </SuccessModal>,
    )
    expect(
      wrapperOpen
        .find('[data-test="success-modal"]')
        .at(0)
        .exists(),
    ).toBe(true)
  })

  // it('Should have proper linked id to the content text', () => {
  //   expect(
  //     wrapperOpen
  //       .find('[data-test="success-title"]')
  //       .at(0)
  //       .text(),
  //   ).toEqual('Success description')
  // })

  // it('Should have a confirmation button and call the according function when click on it', () => {
  //   expect(
  //     wrapperOpen
  //       .find('[data-test="success-button"]')
  //       .at(0)
  //       .text(),
  //   ).toBe('Confirm')
  // })

  // it('Should have a confirmation button and call the according function when click on it', () => {
  //   const confirmButton = wrapperOpen.find('[data-test="success-button"]').at(0)
  //   expect(confirmButton.text()).toBe('Confirm')
  //   confirmButton.simulate('click')
  //   expect(mockClose).toHaveBeenCalledTimes(1)
  // })
})
