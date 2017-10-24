import Constants from '../constants/Constants';
import {combineReducers} from 'redux';

export default function createListByFilterReducer(filter=Constants.SHOW_ALL){
	const idsByFilterReducer = (prevState=[], action)=>{
		if(!action.data || action.data.filter !== filter){
			return prevState;
		}
		switch(action.type){
			case Constants.RECIEVE_TODOS: 
				return action.data.todos.map(eachTodo=>eachTodo.id);
			default: 
				return prevState;	
		}
	}

	const isFetchingByFilterReducer = (prevState=false, action)=>{
		switch(action.type){
			case Constants.REQUEST_TODOS:
				return true;
			case Constants.RECIEVE_TODOS:
				return false;
			default:
				return prevState;
		}
	}

	return combineReducers({
		ids: idsByFilterReducer,
		isFetching: isFetchingByFilterReducer
	});
}

export const getIds = (state) => state.ids;
export const isFetching = (state) => state.isFetching;