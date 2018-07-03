import { combineReducers } from 'redux';
import {reducer as reduxFormReducer } from 'redux-form'
import AuthReducer from './AuthReducer';
import CompanyNameReducer from './CompanyNameReducer';

const RootReducer = combineReducers({
	auth:AuthReducer,
	companyname:CompanyNameReducer,
	form: reduxFormReducer,
});

export default RootReducer;