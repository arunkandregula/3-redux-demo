import Constants from '../constants/Constants';
import todoReducer from './todoReducer';

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
		case Constants.ADD_TODO: 
		case Constants.TOGGLE_TODO: 
			debugger; 
			let obj = {...prevState, [action.data.id]: todoReducer(prevState[action.data.id], action)};
			debugger;
			return obj;
		default:
			return prevState;
	}
}

const allIdsReducer = (prevState=[], action)=>{
	switch(action.type){
		case Constants.ADD_TODO: 
			return [...prevState, action.data.id];
		case Constants.TOGGLE_TODO: 
		default:
			return prevState;
	}
}

const todosReducer = (prevState={}, action)=>{
	return {
		byIds: byIdsReducer(prevState.byIds, action),
		allIds: allIdsReducer(prevState.allIds, action)
	};
}
export default todosReducer;

export function getFilteredTodos(state, filter){
	debugger;
	const todos = state.allIds.map((eachId)=>state.byIds[eachId]);
    return todos.filter((eachTodo)=>{
        switch(filter){
            case Constants.SHOW_ACTIVE: return !eachTodo.isCompleted;
            case Constants.SHOW_COMPLETED: return eachTodo.isCompleted;
            default:
                break;
        }
        return true;
    });
}

