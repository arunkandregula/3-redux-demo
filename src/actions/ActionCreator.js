import Constants from '../constants/Constants';
import Utils from '../utils/Utils';
import * as ServerAPI from '../services/ServerAPI';
const ActionCreators = {
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
    getReceiveTodosAction: (data)=>({
        type: Constants.RECIEVE_TODOS,
        data: data
    }),
    getFetchTodosAction: (filter)=>{
        return ServerAPI.fetchTodos(filter).then((response)=>
            ActionCreators.getReceiveTodosAction({
                todos: response,
                filter: filter
            })); 
    }
};

export default ActionCreators;