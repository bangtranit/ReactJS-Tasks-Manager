import * as types from './../constants/index';

var initialState = {
	by : 'name',
	value : -1
};

var myReducer = ((state = initialState, action) =>{
	if (action.type === types.SORT_ACTION) {
		var { by, value } = action.sort;
		return {
			by, value
		};
	}
	return state;
});
export default myReducer;