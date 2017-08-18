import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.span`
  position: absolute;
  bottom: 5px;
  left: 5px;
  padding: 10px;

  unicode-bidi: bidi-override;
  direction: rtl;
  cursor: pointer;
`

const Star = styled.span`
  transition: fill 0.25s;
  width: 48px;
  height: 48px;

  :hover,
  :hover ~ .star {
    color: yellow;
  }
`

const RatingBar = ({ stars, ratingChanged }) =>
  <Wrapper>
    <Star onClick={() => alert(5)}>
      <i className="fa fa-lg fa-star-o" />
    </Star>
    <Star onClick={() => alert(4)}>
      <i className="fa fa-lg fa-star-o" />
    </Star>
    <Star onClick={() => alert(3)}>
      <i className="fa fa-lg fa-star" />
    </Star>
    <Star onClick={() => alert(2)}>
      <i className="fa fa-lg fa-star" />
    </Star>
    <Star onClick={() => alert(1)}>
      <i className="fa fa-lg fa-star" />
    </Star>
  </Wrapper>

export default RatingBar
