import { configureStore } from '@reduxjs/toolkit'
// import   '../features/cartSlice/cartSlice.jsx';
// import cs from '../components/Product/cartSlice.jsx'; 
import cartS from '../components/Cart/cartSlice.jsx';

export default configureStore({
  reducer: {
    cart: cartS,
  }
})
