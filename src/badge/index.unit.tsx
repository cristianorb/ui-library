import React from 'react'
import { shallow } from 'enzyme'

import CheckIcon from '~/icon/checkIcon'
import Badge from './index'

it('Should read the aria-label attribute and not the children if both are provided', () => {
  const wrapper = shallow(<Badge ariaLabel="Unread messages">12</Badge>)
  expect(wrapper.find('span').prop('aria-hidden')).toBe(true)
})

it('Should display the children if this is a number', () => {
  const value = 12
  const wrapper = shallow(<Badge>value</Badge>)
  expect(wrapper.find('span').prop('aria-hidden')).toBe(false)
})

it('Should read the children if aria-label is empty', () => {
  const wrapper = shallow(<Badge>12</Badge>)
  expect(wrapper.find('span').text()).toBe('12')
})

it('can accept a JSX.Element as children', () => {
  const wrapper = shallow(
    <Badge>
      <CheckIcon />
    </Badge>,
  )
  expect(wrapper.find('CheckIcon').exists()).toBe(true)
})
