import Header from '../Header'
import './index.css'

const  Cart = () => {

    console.log('Entered to the card section')
  
    return  <>
    <Header />
    <div className="cart-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        alt="cart"
        className="cart-img"
      />
    </div>
  </>

}


export default Cart