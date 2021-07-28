import { configureStore } from '@reduxjs/toolkit'
import Reducer from './redux/reducers/rootReducer'
export default configureStore({
  reducer: {Reducer}
})