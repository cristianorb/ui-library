import React, { Component } from 'react'
import cc from 'classcat'

import ItemChoice, { ItemChoiceStatus } from '~/itemChoice'

export interface AutoCompleteListItemProps {
  readonly item: AutocompleteItem
  readonly select: (item: AutocompleteItem) => void
  readonly children: React.ReactElement<any>
  readonly className?: Classcat.Class
  readonly highlighted?: boolean
  readonly status?: ItemChoiceStatus
  readonly onDoneAnimationEnd?: () => void
}

export default class AutoCompleteListItem extends Component<AutoCompleteListItemProps> {
  static defaultProps: Partial<AutoCompleteListItemProps> = {
    highlighted: false,
    status: ItemChoice.STATUS.DEFAULT,
  }

  static STATUS = ItemChoiceStatus

  onMouseDown = () => {
    this.props.select(this.props.item)
  }

  render() {
    return (
      <ItemChoice
        status={this.props.status}
        selected={this.props.highlighted}
        className={cc(['kirk-autoComplete-item', this.props.className])}
        onMouseDown={this.onMouseDown}
        onDoneAnimationEnd={this.props.onDoneAnimationEnd}
      >
        {this.props.children}
      </ItemChoice>
    )
  }
}
