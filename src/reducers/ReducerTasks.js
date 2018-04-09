import * as types from './../constants/index'

var initialState = JSON.parse(localStorage.getItem('tasks'))
if (!initialState) {
	initialState = [];
}
var myReducer = ((state = initialState, action) => {
	var index = 1;
	switch (action.type){
		case types.LIST_ALL:{
			return state;
		}

		case types.SAVE_TASK : {
			var task = {
				id : action.task.id,
				name : action.task.name,
				status : action.task.status
			}
			if (task.id === '') {
				console.log(task, state);
				task.id = generateID();
				state.push(task);
			}else{
				index = findById(state, task.id);
				state[index] = task;
			}
			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];
		}

		case types.UPDATE_STATUS_TASK : {
			index = findById(state,action.id);
			state[index] = {
				...state[index],
				status : !state[index].status
			}
			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];
		}

		case types.DELETE_TASK : {
			index = findById(state,action.id);
			state.splice(index,1);
			localStorage.setItem('tasks',JSON.stringify(state));
			return [...state];
		}

		default: return state; 
	}
});

var findById = (tasks, id) => {
    var result = -1;
    tasks.forEach((task,index) => {
        if (task.id === id) {
            result = index;
        }
    });
    return result;
}

var s4 = () => {
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
}

var generateID = () => {
    return s4() + s4() + "_" + s4() + "_" + s4() + "_" + s4() + "_" + 
    s4() + "_" + s4() + "_" + s4() + "_" + s4();
}

export default myReducer;