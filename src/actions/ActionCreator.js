import Constants from '../constants/Constants';
import Utils from '../utils/Utils';
export default {
    getAddTodoAction: (data)=>{
        return {
            type: Constants.ADD_TODO,
            data: {...data, id: Utils.getNextId() }
        };
    },
    getToggleTodoAction: (data)=>{
        return {
            type: Constants.TOGGLE_TODO,
            data: data
        };
    },
    getChangeVisibilityAction: (data)=>({
		type: data.filter
    })
};