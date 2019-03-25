import React from 'react'
import { shallow, mount } from 'enzyme'

import Button from '~/button'
import EyeIcon from '~/icon/eyeIcon'
import TextField from './index'

it('Should have the proper value.', () => {
  const wrapper = shallow(<TextField name="test" defaultValue="blabla" />)
  const input = wrapper.find('input')
  expect(wrapper.hasClass('kirk-textField')).toBe(true)
  expect(input.prop('value')).toBe('blabla')
})

it('Should be able to change the type.', () => {
  const wrapper = shallow(<TextField name="test" type="password" />)
  const input = wrapper.find('input')
  expect(input.prop('type')).toBe('password')
})

it('Should be able to be a textarea.', () => {
  const wrapper = shallow(<TextField name="test" isTextArea />)
  const textarea = wrapper.find('textarea')
  expect(textarea).toHaveLength(1)
})

it('Should have a placeholder', () => {
  const wrapper = shallow(<TextField name="test" placeholder="this is a placeholder" />)
  const input = wrapper.find('input')
  expect(input.prop('placeholder')).toBe('this is a placeholder')
})

it('Should have an id', () => {
  const wrapper = shallow(<TextField name="test" id="identifier" />)
  const input = wrapper.find('input')
  expect(input.prop('id')).toBe('identifier')
})

it('Should have a name', () => {
  const wrapper = shallow(<TextField name="special_name" />)
  const input = wrapper.find('input')
  expect(input.prop('name')).toBe('special_name')
})

it('Should have a label', () => {
  const wrapper = shallow(<TextField name="test" label="label_name" />)
  const label = wrapper.find('label')
  expect(label.text()).toBe('label_name')
})

it('Should have a required attr', () => {
  const wrapper = shallow(<TextField name="test" label="label_name" required />)
  const input = wrapper.find('input')
  expect(input.prop('required')).toBe(true)
})

it('Should have a button with title', () => {
  const wrapper = mount(
    <TextField
      name="test"
      defaultValue="defaultValue"
      placeholder="this is a placeholder"
      buttonTitle="buttonTitle"
    />,
  )
  const button = wrapper.find('button')
  expect(button.prop('title')).toBe('buttonTitle')
})

it('should have a label that has a for matching the inputs id', () => {
  const wrapper = shallow(<TextField name="test" label="label_name" id="identifier" />)
  const input = wrapper.find('input')
  expect(input.prop('id')).toBe('identifier')
  const label = wrapper.find('label')
  expect(label.prop('htmlFor')).toBe('identifier')
})

it('should have a labelled by attribute', () => {
  const wrapper = shallow(<TextField name="test" labelledBy="identifier" />)
  const input = wrapper.find('input')
  expect(input.prop('aria-labelledby')).toBe('identifier')
})

/* Testing for states */

it('Should update when setting default value props', () => {
  const wrapper = mount(<TextField name="test" defaultValue="blabla" />)
  const spy = jest.spyOn(TextField.prototype, 'componentWillReceiveProps')
  wrapper.setProps({ defaultValue: 'blablabla' })
  const input = wrapper.find('input')
  expect(input.prop('value')).toBe('blablabla')
  expect(spy).toHaveBeenCalledTimes(1)
})

it('Should not update when setting same default value', () => {
  const wrapper = mount(<TextField name="test" defaultValue="blabla" />)
  wrapper.setProps({ defaultValue: 'blabla' })
  const input = wrapper.find('input')
  expect(input.prop('value')).toBe('blabla')
})

it('Should have the correct inputMode for type "number"', () => {
  const wrapper = mount(<TextField name="test" type="number" />)
  expect(wrapper.find('input').prop('inputMode')).toBe('numeric')
})

it('Should be disabled', () => {
  const wrapper = shallow(<TextField name="test" disabled />)
  const input = wrapper.find('input')
  expect(input.prop('disabled')).toBe(true)
})

it('Should be read only', () => {
  const wrapper = shallow(<TextField name="test" readOnly />)
  const input = wrapper.find('input')
  expect(input.prop('readOnly')).toBe(true)
})

it('Can have addon element', () => {
  const addon = <Button className="addon-button">Addon</Button>
  const wrapper = shallow(<TextField name="test" addon={addon} />)
  expect(wrapper.find('.addon-button')).toHaveLength(1)
})

describe('#error', () => {
  it('Should have an error state when passing an error string', () => {
    const errorText = 'this is an error'
    const wrapper = shallow(<TextField name="test" error={errorText} />)
    expect(wrapper.hasClass('kirk-error')).toBe(true)
    expect(wrapper.find('.kirk-error-message')).toHaveLength(1)
    expect(wrapper.find('input').prop('aria-invalid')).toBe('true')
    expect(wrapper.find('span').text()).toBe(errorText)
  })

  it('Should have an error state when passing a JSX element', () => {
    const errorText = 'this is an error'
    const error = <span>{errorText}</span>
    const wrapper = shallow(<TextField name="test" error={error} />)
    expect(wrapper.hasClass('kirk-error')).toBe(true)
    expect(wrapper.find('.kirk-error-message')).toHaveLength(1)
    expect(wrapper.find('input').prop('aria-invalid')).toBe('true')
    expect(wrapper.find('span').text()).toBe(errorText)
  })
})

it('Should allow for an error element passed', () => {
  const ErrorMessage = () => <span>error</span>
  const wrapper = mount(<TextField name="test" error={<ErrorMessage />} />)
  expect(wrapper.find('.kirk-error-message')).toHaveLength(1)
})

/* Testing for events */

it('should have a working clear button', () => {
  const onTextFieldChange = jest.fn()
  const onClear = jest.fn()
  const wrapper = mount(
    <TextField
      name="test"
      defaultValue="some value"
      onChange={onTextFieldChange}
      onClear={onClear}
    />,
  )
  expect(wrapper.find('input').prop('value')).toBe('some value')

  wrapper.find('button').simulate('click')
  expect(wrapper.find('input').prop('value')).toBe('')
  expect(onTextFieldChange).toHaveBeenCalledTimes(1)
  expect(onClear).toHaveBeenCalledTimes(1)
})

it('should have a working show password button', () => {
  const wrapper = mount(<TextField name="test" type="password" defaultValue="some value" />)
  const input = wrapper.find('input')
  expect(input.prop('value')).toBe('some value')
  expect(wrapper.find(EyeIcon).prop('off')).toBe(false)
  expect(input.prop('type')).toBe('password')

  wrapper.find(EyeIcon).simulate('click')
  expect(wrapper.find(EyeIcon).prop('off')).toBe(true)
  expect(wrapper.find('input').prop('type')).toBe('text')
})

it('Simulates a focus event.', () => {
  const onTextFieldFocus = jest.fn()
  const wrapper = shallow(<TextField name="test" onFocus={onTextFieldFocus} />)
  wrapper.find('input').simulate('focus')
  expect(onTextFieldFocus).toHaveBeenCalledTimes(1)
})

it('Simulates a change event.', () => {
  const onTextFieldChange = jest.fn()
  const onClear = jest.fn()
  const wrapper = mount(<TextField name="test" onChange={onTextFieldChange} onClear={onClear} />)
  wrapper.find('input').simulate('change', { target: { value: 'foo' } })
  wrapper.find('input').simulate('change', { target: { value: '' } })
  expect(onTextFieldChange).toHaveBeenCalledTimes(2)
  expect(onClear).toHaveBeenCalledTimes(1)
})

it('Simulates a blur event.', () => {
  const onTextFieldBlur = jest.fn()
  const wrapper = shallow(<TextField name="test" onBlur={onTextFieldBlur} />)
  wrapper.find('input').simulate('blur')
  expect(onTextFieldBlur).toHaveBeenCalledTimes(1)
})

it('Should format the default value', () => {
  const wrapper = mount(
    <TextField name="test" defaultValue="Hello" format={value => `${value} world`} />,
  )
  expect(wrapper.find('input').prop('value')).toBe('Hello world')
})

it('Should format the values when it changes', () => {
  const wrapper = mount(<TextField name="test" format={value => `${value} world`} />)
  wrapper.setState({ value: 'Hello' })
  expect(wrapper.find('input').prop('value')).toBe('Hello world')
})
