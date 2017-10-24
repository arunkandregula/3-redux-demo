import Constants from '../constants/Constants';
import {combineReducers} from 'redux';

/*
const todosReducer = (prevState=[], action)=>{
	switch(action.type){
		case Constants.ADD_TODO: return [...prevState, todoReducer(undefined, action)];
		case Constants.TOGGLE_TODO: 
			return prevState.map(todo => todoReducer(todo, action));
		default:
			return prevState;
	}
}
*/

const byIdsReducer = (prevState={}, action)=>{
	debugger;
	switch(action.type){
		case Constants.RECIEVE_TODOS: 
			let newMap = {...prevState};
			debugger;
			action.data.todos.forEach((eachNewTodo)=>{
				newMap[eachNewTodo.id] = eachNewTodo;
			})			
			return newMap;
		default:
			return prevState;
	}
}

const allIdsReducer = (prevState=[], action)=>{
	debugger;
	if(!action.data || action.data.filter !== Constants.SHOW_ALL){
		return prevState;
	}
	switch(action.type){
		case Constants.RECIEVE_TODOS: 
			return action.data.todos.map(eachTodo=>eachTodo.id);
		default: 
			return prevState;	
	}
}

const activeIdsReducer = (prevState=[], action)=>{
	debugger;
	if(!action.data || action.data.filter !== Constants.SHOW_ACTIVE){
		return prevState;
	}
	switch(action.type){
		case Constants.RECIEVE_TODOS: 
			return action.data.todos.map(eachTodo=>eachTodo.id);
		default: 
			return prevState;	
	}
}

const completedIdsReducer = (prevState=[], action)=>{
	debugger;
	if(!action.data || action.data.filter !== Constants.SHOW_COMPLETED){
		return prevState;
	}
	switch(action.type){
		case Constants.RECIEVE_TODOS: 
			return action.data.todos.map(eachTodo=>eachTodo.id);
		default: 
			return prevState;	
	}
}


const idsByFilterReducer = combineReducers({
	[Constants.SHOW_ALL]: allIdsReducer,
	[Constants.SHOW_ACTIVE]: activeIdsReducer,
	[Constants.SHOW_COMPLETED]: completedIdsReducer
});

const todosReducer = (prevState={}, action)=>{
	return {
		byIds: byIdsReducer(prevState.byIds, action),
		idsByFilter: idsByFilterReducer(prevState.allIds, action)
	};
}
export default todosReducer;

export function getFilteredTodos(state, filter){
	debugger;
	return state.idsByFilter[filter].map((eachId)=>state.byIds[eachId]);
}

