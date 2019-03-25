import React from 'react'

import { TextDisplayType } from '~/text'
import Item from '~/_utils/item'

interface ItemDataProps {
  readonly data: string
  readonly mainInfo: string
  readonly className?: Classcat.Class
  readonly mainTitle?: string
  readonly dataInfo?: string
  readonly tag?: JSX.Element
}

const ItemData = ({ mainInfo, data, className, mainTitle, dataInfo, tag }: ItemDataProps) => {
  return (
    <Item
      className={className}
      leftTitle={mainTitle}
      leftBody={mainInfo}
      rightTitle={data}
      rightTitleDisplay={TextDisplayType.SUBHEADERSTRONG}
      rightBody={dataInfo}
      tag={tag}
    />
  )
}

export default ItemData
