import * as types from './../constants/index'

export const status = () => {
	return {
		type : types.LIST_ALL
	};
}

export const addTask = (task) =>{
	return {
		type : types.ADD_TASK,
		task
	};
}
