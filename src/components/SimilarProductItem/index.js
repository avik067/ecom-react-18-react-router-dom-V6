

import './index.css'

const SimilarProductItem = props => {
  const {each} = props

  return (
    <li className="similar-item-container">
      <img
        className="similar-main-img"
        src={each.imageUrl}
        alt="similar product"
      />
      <h1 className="product-specific-heading">{each.title}</h1>
      <p>by {each.brand}</p>
      <br />
      <div className="row apart align-center">
        <p className="roboto bold">RS {each.price}/-</p>
        <div className="rating-div-lower row  align-center">
          <div>{each.rating}</div>
          <img
            className="icon"
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
          />
        </div>
      </div>
    </li>
  )
}

export default SimilarProductItem
