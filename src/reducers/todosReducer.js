import Constants from '../constants/Constants';
import {combineReducers} from 'redux';
import byIdReducer, * as fromByIdReducer from './byIdReducer';
import createListByFilterReducer, * as fromListByFilter from './createListByFilterReducer';

debugger;
const listByFilterReducer = combineReducers({
	[Constants.SHOW_ALL]: createListByFilterReducer(Constants.SHOW_ALL),
	[Constants.SHOW_ACTIVE]: createListByFilterReducer(Constants.SHOW_ACTIVE),
	[Constants.SHOW_COMPLETED]: createListByFilterReducer(Constants.SHOW_COMPLETED)
});

const todosReducer = (prevState={}, action)=>{
	return {
		byIds: byIdReducer(prevState.byIds, action),
		listByFilter: listByFilterReducer(prevState.listByFilter, action)
	};
}
export default todosReducer;

export function getFilteredTodos(state, filter){
	debugger;
	const ids = fromListByFilter.getIds(state.listByFilter[filter]);
	if(ids == null){
		return [];
	}
	return ids.map((eachId)=>{
		return fromByIdReducer.getTodo(state.byIds, eachId);
	});
}

