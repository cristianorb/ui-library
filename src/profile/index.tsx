import React from 'react'

import Avatar from '~/avatar'
import Rating from '~/rating'
import Text, { TextDisplayType } from '~/text'
import Item from '~/_utils/item'

interface ProfileProps {
  readonly className?: Classcat.Class
  readonly title: string
  readonly info?: string
  readonly isLink?: boolean
  readonly picture?: string
  readonly alt?: string
  readonly isIdChecked?: boolean
  readonly isMedium?: boolean
  readonly score?: number
  readonly ratings?: number
  readonly ratingsLabel?: string
  readonly href?: string | JSX.Element
  readonly onClick?: (event: React.MouseEvent<HTMLElement>) => void
  readonly onBlur?: (event: React.FocusEventHandler<HTMLElement>) => void
  readonly onFocus?: (event: React.FocusEventHandler<HTMLElement>) => void
  readonly onMouseDown?: (event: React.MouseEvent<HTMLElement>) => void
}

const Profile = ({
  className,
  title,
  info,
  picture,
  alt,
  isIdChecked,
  isMedium,
  isLink,
  score = 0,
  ratings,
  ratingsLabel = '',
  href,
  onClick,
  onBlur,
  onFocus,
  onMouseDown,
}: ProfileProps) => {
  const getLeftBody =
    ratings > 0 ? (
      <Rating ratings={ratings} score={score}>
        {ratingsLabel}
      </Rating>
    ) : (
      info && <Text>{info}</Text>
    )

  const showChevron = isLink || !!href || !!onClick

  return (
    <Item
      className={className}
      leftTitle={title}
      leftTitleDisplay={isMedium ? TextDisplayType.DISPLAY2 : TextDisplayType.TITLE}
      leftBody={getLeftBody}
      rightAddon={
        picture && (
          <Avatar image={picture} alt={alt} isIdChecked={isIdChecked} isMedium={isMedium} />
        )
      }
      chevron={showChevron}
      href={href}
      onClick={onClick}
      onBlur={onBlur}
      onFocus={onFocus}
      onMouseDown={onMouseDown}
    />
  )
}

export default Profile
