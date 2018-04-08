import { combineReducers } from 'redux'
import tasks from './ReducerTasks'
import isDisplayForm from './ReducerIsDisplayForm'
import editTask from './ReducerEditTask'
import filterTable from './ReducerFilterTable'

var myReducer = combineReducers({
	tasks,
	editTask,
	filterTable,
	isDisplayForm
});

export default myReducer;