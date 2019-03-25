import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, select, number, boolean } from '@storybook/addon-knobs'

import { color } from '~/_utils/branding'
import * as icons from '~/icon/index'

/** @type {{colorTitle: React.CSSProperties}} */
const styles: { [name: string]: React.CSSProperties } = {
  iconItem: {
    float: 'left',
    height: '150px',
    width: '150px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#708c91',
  },
}

const stories = storiesOf('Icons', module)
stories.addDecorator(withKnobs)

const c = Object.keys(color).reduce(
  (acc, key) => ({
    ...acc,
    [color[key]]: key,
  }),
  {},
)

const createIconKnobs = (props: {}) =>
  Object.entries(props).reduce((acc: { [key: string]: any }, [name, value]: [string, any]) => {
    if (typeof value === 'string') {
      if (name.toLowerCase().includes('color')) {
        acc[name] = select(name, c, value)
      } else {
        acc[name] = text(name, String(value))
      }
    }

    if (typeof value === 'boolean') {
      acc[name] = boolean(name, Boolean(value))
    }

    if (typeof value === 'number') {
      acc[name] = number(name, Number(value))
    }

    if (name === 'badgeAriaLabel' || 'badgeContent') {
      acc[name] = text(name, String(value))
    }

    return acc
  }, {})

stories.add('All', () => {
  const iconList = Object.entries(icons).map(([name, Component]) => (
    <div key={name} style={styles.iconItem}>
      <Component {...Component.defaultProps} />
      <br />
      {name}
    </div>
  ))

  return iconList
})

Object.entries(icons).forEach(([name, Component]) => {
  stories.add(name.replace('Icon', ''), () => (
    <Component {...createIconKnobs(Component.defaultProps)} />
  ))
})
