import styled from 'styled-components'
import { color, radius, space, inputBorderSize, transition } from '_utils/branding'
import { selectHeight } from 'selectField/SelectField'

import PhoneField from './PhoneField'

const StyledPhoneField = styled(PhoneField)`
  & .kirk-phoneField-wrapper--inline {
    display: flex;
    border-radius: ${radius.l};
    background-color: ${color.inputBackground};
  }

  & .kirk-phoneField-wrapper--inline.kirk-phoneField-wrapper--hasFocus {
    border: ${inputBorderSize.focus} solid ${color.inputBorderFocus};
  }

  & .kirk-phoneField-wrapper--inline.kirk-phoneField-wrapper--hasFocus .kirk-selectField select {
    height: calc(${selectHeight} - ${inputBorderSize.focus} * 2);
  }

  &
    .kirk-phoneField-wrapper--inline.kirk-phoneField-wrapper--hasFocus
    .kirk-textField-wrapper
    input {
    padding-top: calc(${space.l} - ${inputBorderSize.focus});
    padding-bottom: calc(${space.l} - ${inputBorderSize.focus});
  }

  & .kirk-phoneField-wrapper--inline .kirk-selectField,
  & .kirk-phoneField-wrapper--inline .kirk-textField {
    flex: 1;
  }

  & .kirk-phoneField-wrapper--inline .kirk-selectField {
    flex-grow: 1;
  }

  & .kirk-phoneField-wrapper--inline .kirk-textField {
    flex-grow: 2;
  }

  & .kirk-phoneField-wrapper--inline .kirk-textField input {
    padding-left: 0 !important;
  }

  & .kirk-phoneField-wrapper .kirk-textField {
    margin-top: ${space.l};
  }

  &.kirk-error .kirk-phoneField-wrapper--inline {
    background: ${color.inputError};
    animation: phoneFieldError ${transition.duration.fast} ease-in-out;
  }

  &.kirk-error .kirk-selectField,
  &.kirk-error .kirk-selectField .kirk-icon,
  &.kirk-error .kirk-textField-wrapper,
  &.kirk-error .kirk-textField .kirk-textField-wrapper input {
    background: ${color.inputError};
    border-color: ${color.inputError};
  }

  &.kirk-error .kirk-error-message {
    color: ${color.danger};
    display: block;
    padding: ${space.m};
  }

  @keyframes phoneFieldError {
    20% {
      margin-left: -10px;
      margin-right: 10px;
    }
    40% {
      margin-left: 10px;
      margin-right: -10px;
    }
    60% {
      margin-left: -5px;
      margin-right: 5px;
    }
    80% {
      margin-left: 5px;
      margin-right: -5px;
    }
    100% {
      margin-left: 0px;
      margin-right: 0px;
    }
  }
`

export { PhoneFieldProps, PhoneFieldOnChangeParameters, FIELDS } from './PhoneField'
export default StyledPhoneField
