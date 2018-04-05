import sort from './sort';
import status from './status';
import { combineReducers } from 'redux';

var myReducers = combineReducers({
	sort, 
	status
});

export default myReducers;