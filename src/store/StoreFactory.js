import {createStore} from 'redux';
import {storeReducer} from '../reducers';
import Utils from '../utils/Utils';
import Constants from '../constants/Constants';
import _ from 'lodash';


function getDispatchWithLogging(store){
	return (originalDispatch) => {
		if(!console.group){
			return originalDispatch;
		}
		return (action)=>{
			console.group(action.type);
			console.log('%c prev state', 'color:red', store.getState());
			console.log('%c action', 'color:red', action);
			const returnValue = originalDispatch(action);
			console.log('%c next state', 'color:red', store.getState());
			console.groupEnd(action.type);
			return returnValue;
		}
	} 
}

function getDispatchWithPromiseSupport(store){
	return (originalDispatch) => {
		return (action)=>{
			if(typeof action.then === 'function'){
				return action.then(originalDispatch); 
			} else{
				return originalDispatch(action);
			}
		}
	}
}

function wrapDispatchWithMiddleWares(store, middlewares){
	let temp = null;
	middlewares.forEach((eachMiddleware)=>{
		store.dispatch = eachMiddleware(store)(store.dispatch);
	})
}

const configureStore = (store)=>{
	const middlewares = [];

	// add logging only in non-production environment
	if(process.env.NODE_ENV !== 'production'){
		middlewares.push(getDispatchWithLogging);	
	}

	// add promise support to the store
	middlewares.push(getDispatchWithPromiseSupport);

	wrapDispatchWithMiddleWares(store, middlewares);

	store.subscribe(_.throttle(()=>{
		const dataToBeSaved = {
			[Constants.NEXT_ID]: Utils.getPreviousId()+1,
			todos: store.getState().todos
		}
		Utils.saveDataToLocalStorage(dataToBeSaved);
	}, 1000));

}


const store = createStore(storeReducer);
configureStore(store);

const StoreFactory = {
	getStore(){
		return store;
	}
}
export default StoreFactory;