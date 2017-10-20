import {createStore} from 'redux';
import {storeReducer} from '../reducers';
import Utils from '../utils/Utils';
import Constants from '../constants/Constants';
import _ from 'lodash';


function getDispatchWithLogging(store){
	const originalDispatch = store.dispatch;
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
/*
When we create a redux store, its initial state is determined by the root reducer or storeReducer.
We can override it with second argument to createStore.
*/

const persistedData = Utils.loadDataFromLocalStorage();
/*
const persistedData = {
	id: 7,
	todos: {
		byIds: {
			1: {
				id: 1,
				text: 'Farmers Townhome Insurance',
				isCompleted: true
			},
			2: {
				id: 2,
				text: 'Farmers Car Insurance',
				isCompleted: false
			}
		},
		allIds: [1,2]
	}
};
*/
const stateSavedEarlier = {
	todos: persistedData && persistedData.todos
}

const store = createStore(storeReducer, stateSavedEarlier);

debugger;
// add logging only in non-production environment
if(process.env.NODE_ENV !== 'production'){
	store.dispatch = getDispatchWithLogging(store);	
}


store.subscribe(_.throttle(()=>{
	const dataToBeSaved = {
		[Constants.NEXT_ID]: Utils.getPreviousId()+1,
		todos: store.getState().todos
	}
	Utils.saveDataToLocalStorage(dataToBeSaved);
}, 1000));

const StoreFactory = {
	getStore(){
		return store;
	}
}
export default StoreFactory;