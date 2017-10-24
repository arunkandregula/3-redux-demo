import todosReducer, * as fromTodosReducer from './todosReducer';
import * as fromListByFilterReducer from './createListByFilterReducer';
import {combineReducers} from 'redux';
/*
const storeReducer = (prevState={}, action)=>{
	return {
		todos: todosReducer(prevState.todos, action)
	};
}
*/

const storeReducer = combineReducers({
	todos: todosReducer
});

export default storeReducer;

export const getFilteredTodos = (state, filter) => fromTodosReducer.getFilteredTodos(state.todos, filter);

export const isFetching = (state, filter) => fromListByFilterReducer.isFetching(state.todos.listByFilter[filter]);

