import React from 'react';
import {connect} from 'react-redux';
import ActionCreator from '../../actions/ActionCreator';
import TodoList from './TodoList';
import {withRouter} from 'react-router';
import {getFilteredTodos, isFetching} from '../../reducers';
import Constants from '../../constants/Constants';

const mapStateToTodoListProps = (state, ownProps) => {
    const filter = ownProps.params.filter || Constants.SHOW_ALL;
    console.log('ownProps : ', ownProps.params );
    console.log('filter : ', filter );
    return {
        todos: getFilteredTodos(state, filter),
        filter: filter,
        isFetching: isFetching(state, filter)
    };
}

const mapDispatchToTodoListProps = (dispatch) => {
    return {
        onTodoClick: (id)=>{
            dispatch(ActionCreator.getToggleTodoAction({
                id
            }));
        },
        fetchData: (filter)=>{
            dispatch(ActionCreator.getRequestTodosAction(filter));
            dispatch(ActionCreator.getFetchTodosAction(filter));
        }
    };
}

class VisibleTodoList extends React.Component{
    componentDidMount(){
        this.props.fetchData(this.props.filter);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.filter !== this.props.filter){
            console.log('componentWillReceiveProps with nextProps ', nextProps, ', oldProps: ', this.props);
            this.props.fetchData(nextProps.filter);
        }
    }
  
    render(){
        return <TodoList {...this.props} />;
    }
}

// Mistake1: placed this line erroneously before TodoList dedlaration. I forgot that let and const bindings are not subject to hoisting.
export default withRouter(connect(mapStateToTodoListProps, mapDispatchToTodoListProps)(VisibleTodoList));
