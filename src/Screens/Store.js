import { createStore } from 'redux'
import { reducer } from './todoListRedux'
// Create a store with our reducer
const store = createStore(reducer)
export default store