import React from 'react'
import cc from 'classcat'
import { FocusVisibleConsumer } from '_utils/focusVisible/FocusVisibleConsumer'

import QuestionIcon from 'icon/questionIcon'

export interface WhyProps {
  readonly children: string
  readonly title: string
  readonly className?: Classcat.Class
  readonly onClick?: () => void
}

const Why = ({ className, children, title, onClick }: WhyProps) => {
  const { focusVisible, onFocus, onBlur } = FocusVisibleConsumer()
  return (
    <button
      type="button"
      className={cc([
        'kirk-why',
        {
          'focus-visible': focusVisible,
        },
        className,
      ])}
      title={title}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <QuestionIcon />
      <span>{children}</span>
    </button>
  )
}

export default Why
