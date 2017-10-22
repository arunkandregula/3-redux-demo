import Constants from '../constants/Constants';

const todoReducer = (prevState={}, action) => {
	switch(action.type){
		case Constants.ADD_TODO:
			return {
				id: action.data.id,
				text: action.data.text,
				isCompleted: false
			};
		case Constants.TOGGLE_TODO:	
			if(prevState.id !== action.data.id){
				return prevState;
			}
			return {...prevState, isCompleted: !prevState.isCompleted}; 
		default:
			return prevState;	
	}
}

export default todoReducer;

