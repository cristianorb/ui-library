import styled from 'styled-components'
import SuccessModal from './SuccessModal'

import { color, space, responsiveBreakpoints } from '_utils/branding'

import IllustratedSection from 'layout/section/illustratedSection'

import Modal from 'modal'
import Button from 'button'

const StyledSuccessModal = styled(Modal)`
  padding: 0;
  text-align: center;
  background-color: ${color.successBackground};

  .kirk-modal-dialog {
    display: flex;
    justify-content: center;
    padding: 0;
    margin: 0 auto;
    width: 100%;
    border-radius: 0;
    background-color: ${color.successBackground};
  }

  .kirk-modal-body {
    display: flex;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    flex-direction: column;

    @media (${responsiveBreakpoints.isMediaLarge}) {
      flex-direction: row;
      align-items: center;
      flex-wrap: wrap;
    }
  }
`

const StyledIllustratedSection = styled(IllustratedSection)`
  display: flex;
  flex: 1;

  .kirk-illustratedSection-illustration {
    padding-top: calc(2 * ${space.xxl});
    justify-content: center;
    align-items: center;

    @media (${responsiveBreakpoints.isMediaLarge}) {
      padding-top: 0;
    }
  }

  .kirk-illustratedSection-content {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`
const SuccessTitle = styled('h1')`
  padding: ${space.xl};
  flex: 1;
`

const SuccessAction = styled.div`
  padding: ${space.xl};
`

// @todo: This should be applyed on Button component since it is part of its specification
const SuccessButton = styled(Button)`
  margin: ${space.xl};
`

const SuccessModalStyle = {
  StyledSuccessModal,
  StyledIllustratedSection,
  SuccessTitle,
  SuccessAction,
  SuccessButton,
}

export { SuccessModalProps } from './SuccessModal'
export { SuccessModalStyle }
export default SuccessModal
