
import AllProductsSection from '../AllProductsSection'
import PrimeDealsSection from '../PrimeDealsSection'


import Header from '../Header'

import './index.css'

const Products = () => {

    console.log('Entered to the Products seection')

    return  (<div className='main-product-container'>

            <Header />
            <div className="product-sections">
            <PrimeDealsSection />
            <AllProductsSection />
            </div>
  </div>)
}


export default Products