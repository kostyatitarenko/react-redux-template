import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchProductsAction from '../api/products';

import { getProductsError, getProducts, getProductsPending } from '../store/reducers/products';

import Spinner from '../components/Spiner';
import List from '../components/List'

// class Products extends Component {

//   componentDidMount () {
//     const { fetchProducts } = this.props;
//     fetchProducts();
//   }

//   shouldComponentRender () {
//     const { pending } = this.props;
//     if (pending === false) return false;
//     return true;
//   }

//   render () {
//     const { products, error } = this.props;

//     if (this.shouldComponentRender()) return <Spinner />
//     return (
//       <div className='product-list-wrapper'>
//         {error && <span className='product-list-error'>{error}</span>}
//         <List items={products} />
//       </div>
//     )
//   }
// }

const Products = ({ fetchProducts, products, pending, error }) => {

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts()
    }
  }, []);

  if (pending) return <Spinner />

  return (
    <div className='product-list-wrapper'>
      {error && <span className='product-list-error'>{error}</span>}
      <List items={products} />
      <Spinner />
    </div>
  )

}

const mapStateToProps = state => ({
  error: getProductsError(state.products),
  products: getProducts(state.products),
  pending: getProductsPending(state.products)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts: fetchProductsAction
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);