import React from 'react'
import './rating.css'
import classnames from 'classnames'

const Star = props => {
  const starClass =
    props.stars > props.ordinal - 1
      ? classnames(props.className, 'fa-star')
      : classnames(props.className, 'fa-star-o')

  return <i className={starClass} />
}

const RatingBar = ({ stars, ratingChanged }) =>
  <span className="rating">
    <span className="star" onClick={() => ratingChanged(5)}>
      <Star stars={stars} className="fa fa-lg" ordinal={5} />
    </span>
    <span className="star" onClick={() => ratingChanged(4)}>
      <Star stars={stars} className="fa fa-lg" ordinal={4} />
    </span>
    <span className="star" onClick={() => ratingChanged(3)}>
      <Star stars={stars} className="fa fa-lg" ordinal={3} />
    </span>
    <span className="star" onClick={() => ratingChanged(2)}>
      <Star stars={stars} className="fa fa-lg" ordinal={2} />
    </span>
    <span className="star" onClick={() => ratingChanged(1)}>
      <Star stars={stars} className="fa fa-lg" ordinal={1} />
    </span>
  </span>

export default RatingBar
