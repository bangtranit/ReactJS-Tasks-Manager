import { combineReducers } from 'redux'
import tasks from './ReducerTasks'
import isDisplayForm from './ReducerIsDisplayForm'
import editTask from './ReducerEditTask'
var myReducer = combineReducers({
	tasks,
	isDisplayForm,
	editTask
});

export default myReducer;