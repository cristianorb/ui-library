import React, { ReactNode } from 'react'

import { replaceNewLineWithBR } from '_utils'

export interface TextProps {
  readonly className?: string
  readonly children: string | ReactNode
  readonly isInverted?: boolean
  readonly itemProp?: string // Allows microdata annotation on Text
}

const Text = ({ children, className, isInverted = false, ...props }: TextProps) => {
  const classes = isInverted ? `kirk-text--inverse ${className}` : className
  const content = typeof children === 'string' ? replaceNewLineWithBR(children) : children

  return (
    <span className={classes} {...props}>
      {content}
    </span>
  )
}

export default Text
