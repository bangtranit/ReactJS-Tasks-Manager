import { combineReducers } from 'redux'
import tasks from './ReducerTasks'
import isDisplayForm from './ReducerIsDisplayForm'
import editTask from './ReducerEditTask'
import filterTable from './ReducerFilterTable'
import searchTask from './ReducerSearchTask'

var myReducer = combineReducers({
	tasks,
	keyword : searchTask,
	editTask,
	filterTable,
	isDisplayForm
});

export default myReducer;