import React from 'react'
import cc from 'classcat'
import style from './style'

import ChevronIcon from '~/icon/chevronIcon'
import { color } from '~/_utils/branding'

export interface DropdownButtonProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void
  children: JSX.Element | string
  open?: boolean
  className?: string
  iconPosition?: 'left' | 'right'
}

const DropdownButton = ({
  open = false,
  children,
  onClick,
  className = '',
  iconPosition = 'right',
}: DropdownButtonProps) => (
  <div
    className={cc([
      'kirk-dropdownButton',
      {
        'kirk-dropdownButton--open': open,
      },
      className,
    ])}
  >
    <button aria-expanded={open} type="button" onClick={onClick}>
      {iconPosition === 'left' && <ChevronIcon iconColor={color.icon} down />}
      {children}
      {iconPosition === 'right' && <ChevronIcon iconColor={color.icon} down />}
    </button>
    <style jsx>{style}</style>
  </div>
)

export default DropdownButton
