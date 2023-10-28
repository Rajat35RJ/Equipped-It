/* eslint-disable react/jsx-handler-names */
import React, { Component } from 'react'
//import { render } from 'react-dom'
import data from './dataForService'
import NonPassiveTouchTarget from './../../carousel/NonPassiveTouchTarget'
import {TouchCarousel, clamp } from './../../carousel/TouchCarousel'
import touchWithMouseHOC from './../../carousel/touchWithMouseHOC'
import './CarouselForService.scss';

const cardSize = 300
const cardPadCount = 2

function CarouselContainer (props) {
  const { cursor, carouselState, ...rest } = props
  return (
    <NonPassiveTouchTarget className='carousel-container-service'>
      <NonPassiveTouchTarget className='carousel-track-service' {...rest} />
    </NonPassiveTouchTarget>
  )
}

const container2 = touchWithMouseHOC(CarouselContainer)

export default class CarouselForService extends Component {
  renderCard (index, modIndex, cursor) {
    const item = data[modIndex]
    const opacity = 1 - 1.5 * Math.abs(index + cursor)
    const zIndex = opacity * data.length
    return (
      <div
        key={index}
        className='carousel-card-service'
        style={{
          opacity: clamp(opacity, 0, 1),
          zIndex
        }}
      >
        <div
          className='carousel-card-inner-service'
          style={{
             //backgroundColor: item.background,
              backgroundImage: item.backgroundImg,
              backgroundRepeat: 'no-repeat',
              backgroundSize:'cover'
          }}
        >
          <div className='carousel-title-service'>{item.title}</div>
          <div className='carousel-text-service'>{item.text}</div>
        </div>
      </div>
    )
  }

  render () {
    return (
        <TouchCarousel
          component={container2}
          cardSize={cardSize}
          cardCount={data.length}
          cardPadCount={cardPadCount}
          autoplay={2e3}
          renderCard={this.renderCard}
          stiffness={100}
        />
    )
  }
}

