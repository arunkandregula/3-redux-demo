import Constants from '../constants/Constants';

const byIdReducer = (prevState={}, action)=>{
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

export default byIdReducer;

export const getTodo = (state, id) => state[id];