import {createStore, applyMiddleware} from 'redux';
import {storeReducer} from '../reducers';
import Utils from '../utils/Utils';
import Constants from '../constants/Constants';
import _ from 'lodash';

import logger from 'redux-logger';

const dispatchWithThunkSupport = (store)=>{
	debugger;
	return (nextDispatch)=>{
		debugger;
		return (action)=>{
			debugger;
			if(typeof action === 'function'){
				action(nextDispatch);
			} else {
				nextDispatch(action); 
			}
		}
	}

}
const configureStore = ()=>{
	// add promise support to the store
	const middlewares = [dispatchWithThunkSupport];

	// add logging only in non-production environment
	if(process.env.NODE_ENV !== 'production'){
		middlewares.push(logger);	
	}
	const store = createStore(storeReducer, applyMiddleware(...middlewares));

	store.subscribe(_.throttle(()=>{
		const dataToBeSaved = {
			[Constants.NEXT_ID]: Utils.getPreviousId()+1,
			todos: store.getState().todos
		}
		Utils.saveDataToLocalStorage(dataToBeSaved);
	}, 1000));

	return store;
}



const store = configureStore();

const StoreFactory = {
	getStore(){
		return store;
	}
}
export default StoreFactory;