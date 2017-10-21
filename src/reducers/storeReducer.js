import todosReducer, * as fromTodosReducer from './todosReducer';

const storeReducer = (prevState={}, action)=>{
	debugger;
	return {
		todos: todosReducer(prevState.todos, action)
	};
}

export default storeReducer;

export const getFilteredTodos = (state, filter) => fromTodosReducer.getFilteredTodos(state.todos, filter);