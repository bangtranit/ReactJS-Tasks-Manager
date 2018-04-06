import * as types from './../constants/index'

var initialState = JSON.parse(localStorage.getItem('tasks'))
var myReducer = ((state = initialState, action) => {

	switch (action.type){
		case types.LIST_ALL:{
			return state;
		}

		case types.ADD_TASK : {
			var newTask = {
				id : generateID(),
				name : action.task.name,
				status : action.task.status
			}
			state.push(newTask);
			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];
		}

		case types.UPDATE_STATUS_TASK : {
			var index = findById(state,action.id);
			state[index].status = !state[index].status;
			localStorage.setItem('tasks', JSON.stringify(state));
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