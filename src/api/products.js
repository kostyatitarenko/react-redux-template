import axios from 'axios';
import { fetchProductsPending, fetchProductsSuccess, fetchProductsError } from '../store/actions/products';

const fetchProducts = () => async dispatch => {

  dispatch(fetchProductsPending());
  
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const {data} = response;
  try {
    if (response.error) {
      throw (response.error);
    }
    dispatch(fetchProductsSuccess(data));
  } catch (error) {
    dispatch(fetchProductsError(error));
  }
}

export default fetchProducts;
