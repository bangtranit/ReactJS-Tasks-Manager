import { createStore } from 'redux';
import { status, sort} from './actions/index';
import * as types from './constants/index';
import myReducer from './reducers/index';

const store = createStore(myReducer);
console.log('Default : ',store.getState());

store.dispatch(status());
console.log('STATUS : ',store.getState());

store.dispatch(sort({
	by : 'status',
	value : -2
}));
console.log('SORT : ',store.getState());
