import React from 'react'
import uuidv4 from 'uuid/v4'

import { ModalProps } from 'modal'
import { ButtonStatus } from 'button'

import { SuccessModalStyle } from './index'

export interface SuccessModalProps extends ModalProps {
  readonly confirmLabel?: string
  readonly imageSrc: string
  readonly imageText?: string
}

const SuccessModal = (props: SuccessModalProps): JSX.Element => {
  const {
    isOpen = false,
    onClose = () => {},
    forwardedRef = null,
    confirmLabel,
    imageSrc,
    imageText = '',
    children,
    className,
  } = props

  const baseClassName = 'kirk-successModal'
  const successContentId = `${baseClassName}-content-${uuidv4()}`

  const {
    StyledSuccessModal,
    StyledIllustratedSection,
    SuccessTitle,
    SuccessAction,
    SuccessButton,
  } = SuccessModalStyle

  return (
    <StyledSuccessModal
      onClose={onClose}
      isOpen={isOpen}
      closeOnEsc={false}
      displayCloseButton={false}
      displayDimmer={false}
      forwardedRef={forwardedRef}
      className={className}
      modalContentClassName={baseClassName}
      ariaLabelledBy={successContentId}
      data-test="success-modal"
    >
      <StyledIllustratedSection illustrationUrl={imageSrc} illustrationAlt={imageText}>
        <SuccessTitle isInverted data-test="success-title">
          {children}
        </SuccessTitle>
        <SuccessAction>
          <SuccessButton
            status={ButtonStatus.SECONDARY}
            className="test-success-button"
            data-test="success-button"
            onClick={onClose}
          >
            {confirmLabel}
          </SuccessButton>
        </SuccessAction>
      </StyledIllustratedSection>
    </StyledSuccessModal>
  )
}

export default SuccessModal
