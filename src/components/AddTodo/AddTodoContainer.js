import AddTodo from './AddTodo';
import {connect} from 'react-redux';

const AddTodoContainer = connect()(AddTodo);

export default AddTodoContainer;