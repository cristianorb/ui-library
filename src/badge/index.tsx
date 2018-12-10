import React from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import style from 'badge/style'

interface BadgeProps {
  readonly className?: Classcat.Class
  readonly children: string | JSX.Element
  readonly ariaLabel?: string
}

const Badge = ({ className, children, ariaLabel }: BadgeProps) => {
  if (isEmpty(children)) {
    return null
  }

  return (
    <div className={cc(['kirk-badge', className])} aria-label={ariaLabel}>
      <span aria-hidden={!!ariaLabel}>{children}</span>
      <style jsx>{style}</style>
    </div>
  )
}

export default Badge
