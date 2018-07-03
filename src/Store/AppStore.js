import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../Reducers'
const logger = (store) => (next) => (action) => {
	console.log('store console : ',action)
	return next(action);
} 

const store = createStore(
	RootReducer,
	applyMiddleware(logger,thunk)
)

export default store;