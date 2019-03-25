import React from 'react'
import { shallow, mount } from 'enzyme'

import Rating from './index'

describe('Ratings', () => {
  it('Should have a rating and label', () => {
    const ratings = shallow(
      <Rating ratings={1} score={0}>
        rating
      </Rating>,
    )
    const rating = ratings.find('span')
    expect(rating.text()).toBe('1 rating')
  })

  it('Should have a rating, label and stars', () => {
    const profile = mount(
      <Rating ratings={1} score={5}>
        rating
      </Rating>,
    )
    const ratings = profile.find('span')
    expect(ratings.text()).toBe('1 rating')
    const stars = profile.find('svg')
    expect(stars).toHaveLength(5)
  })
})
