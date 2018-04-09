import { combineReducers } from 'redux'
import tasks from './ReducerTasks'
import isDisplayForm from './ReducerIsDisplayForm'
import editTask from './ReducerEditTask'
import filterTable from './ReducerFilterTable'
import searchTask from './ReducerSearchTask'
import sortTask from './ReducerSortTask'

var myReducer = combineReducers({
	tasks,
	sortTask,
	editTask,
	filterTable,
	isDisplayForm,
	keyword : searchTask
});

export default myReducer;