import Constants from '../constants/Constants';
import {combineReducers} from 'redux';
import byIdReducer, * as fromByIdReducer from './byIdReducer';
import createListByFilterReducer from './createListByFilterReducer';

const listByFilterReducer = combineReducers({
	[Constants.SHOW_ALL]: createListByFilterReducer(Constants.SHOW_ALL),
	[Constants.SHOW_ACTIVE]: createListByFilterReducer(Constants.SHOW_ACTIVE),
	[Constants.SHOW_COMPLETED]: createListByFilterReducer(Constants.SHOW_COMPLETED)
});

const todosReducer = (prevState={}, action)=>{
	return {
		byIds: byIdReducer(prevState.byIds, action),
		listByFilter: listByFilterReducer(prevState.allIds, action)
	};
}
export default todosReducer;

export function getFilteredTodos(state, filter){
	debugger;
	if(state.listByFilter[filter] == null){
		return [];
	}
	return state.listByFilter[filter].map((eachId)=>{
		return fromByIdReducer.getTodo(state.byIds, eachId);
	});
}

