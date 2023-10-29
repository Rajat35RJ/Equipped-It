import React, { Component } from 'react'
import data from './../../carousel/data'
import NonPassiveTouchTarget from './../../carousel/NonPassiveTouchTarget'
import {TouchCarousel, clamp } from './../../carousel/TouchCarousel'
import touchWithMouseHOC from './../../carousel/touchWithMouseHOC'

const cardSize = 300
const cardPadCount = 3
const carouselWidth = clamp(window.innerWidth, 0, 960)

function CarouselContainer (props) {
  const { cursor, carouselState, ...rest } = props
  // Put current card at center
  const translateX = (cursor - cardPadCount) * cardSize + (carouselWidth - cardSize) / 2
  return (
    <NonPassiveTouchTarget className='carousel-container'>
      <NonPassiveTouchTarget
        className='carousel-track'
        style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
        {...rest}
      />
    </NonPassiveTouchTarget>
  )
}

const Container = touchWithMouseHOC(CarouselContainer)

export default class Carousel extends Component {
  renderCard (index, modIndex, cursor) {
    const item = data[modIndex]
    const rotate = 40 * (index + cursor)
    const onTop = Math.abs(index + cursor) < 0.5
    return (
      <div key={index} className='carousel-card'>
        <div
          className='carousel-card-inner'
          style={{
            backgroundColor: item.background,
            transform: `rotate(${rotate}deg)`,
            zIndex: onTop ? 1 : 0
          }}
        >
          <div className='carousel-title'>{item.title}</div>
          <div className='carousel-text'>{item.text}</div>
        </div>
      </div>
    )
  }

  render () {
    return (      
        <TouchCarousel
          component={Container}
          cardSize={cardSize}
          cardCount={data.length}
          cardPadCount={cardPadCount}
          autoplay={2e3}
          renderCard={this.renderCard}
        />      
    )
  }
}

