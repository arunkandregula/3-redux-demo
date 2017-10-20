import {connect} from 'react-redux';
import Utils from '../../utils/Utils'
import ActionCreator from '../../actions/ActionCreator';
import TodoList from './TodoList';
import {withRouter} from 'react-router';
import {getFilteredTodos} from '../../reducers';

const mapStateToTodoListProps = (state, ownProps) => {
    return {
        todos: getFilteredTodos(state, ownProps.params.filter || 'all')
    };
}

const mapDispatchToTodoListProps = (dispatch) => {
    return {
        onTodoClick: (id)=>{
            debugger;

            dispatch(ActionCreator.getToggleTodoAction({
                id
            }));
        }
    };
}

// Mistake1: placed this line erroneously before TodoList dedlaration. I forgot that let and const bindings are not subject to hoisting.
export default withRouter(connect(mapStateToTodoListProps, mapDispatchToTodoListProps)(TodoList));
