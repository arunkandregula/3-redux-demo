import React from 'react';
import {connect} from 'react-redux';
import Utils from '../../utils/Utils'
import ActionCreator from '../../actions/ActionCreator';
import TodoList from './TodoList';
import {withRouter} from 'react-router';
import {getFilteredTodos} from '../../reducers';
import * as ServerAPI from '../../services/ServerAPI';
import Constants from '../../constants/Constants';

const mapStateToTodoListProps = (state, ownProps) => {
    const filter = ownProps.params.filter || Constants.SHOW_ALL;
    return {
        todos: getFilteredTodos(state, filter),
        filter: filter
    };
}

const mapDispatchToTodoListProps = (dispatch) => {
    return {
        onTodoClick: (id)=>{
            debugger;
            dispatch(ActionCreator.getToggleTodoAction({
                id
            }));
        },
        onRecieveTodos: (newReceivedTodos)=>{
            debugger;
            dispatch(ActionCreator.getReceiveTodosAction(newReceivedTodos));
        }
    };
}

class VisibleTodoList extends React.Component{
    componentDidMount(){
        ServerAPI.fetchTodos(this.props.filter).then((response)=>{
            this.props.onRecieveTodos(response);
        });
    }
    render(){
        return <TodoList {...this.props} />;
    }

}

// Mistake1: placed this line erroneously before TodoList dedlaration. I forgot that let and const bindings are not subject to hoisting.
export default withRouter(connect(mapStateToTodoListProps, mapDispatchToTodoListProps)(VisibleTodoList));
