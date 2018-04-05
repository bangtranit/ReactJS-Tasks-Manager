import * as types from './../constants/index';

export const status = () => {
	return {
		type : types.TOGGLE_STATUS
	}
}

export const sort = (sort) =>{
	return {
		type : types.SORT_ACTION,
		sort
	};
}