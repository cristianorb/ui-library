import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '~/_utils/branding'

class SearchIcon extends PureComponent<Icon> {
  static defaultProps: Icon = {
    className: '',
    iconColor: color.icon,
    size: 24,
    title: '',
  }

  render() {
    const { className, iconColor, size, title } = this.props
    return (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={cc(['kirk-icon', className])}
        stroke={iconColor}
        width={size}
        aria-hidden={isEmpty(title)}
      >
        {title && <title>{title}</title>}
        <g
          fill="none"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        >
          <line x1="22" y1="22" x2="16.4" y2="16.4" />
          <circle cx="10" cy="10" r="9" />
        </g>
      </svg>
    )
  }
}

export default SearchIcon
