import todosReducer, * as fromTodosReducer from './todosReducer';
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