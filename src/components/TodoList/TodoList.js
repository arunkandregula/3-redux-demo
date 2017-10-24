import React from 'react';
import Todo from '../Todo/Todo';

const TodoList = ({todos, onTodoClick, isFetching})=>{
	debugger
	if(isFetching && todos.length === 0){
		return <p>Loading...</p>;
	}
    const todoItems =  todos.map((eachTodo)=>{
    	debugger
        return <Todo key={eachTodo.id} todo={eachTodo} clickHandler={onTodoClick.bind(null, eachTodo.id)} />;
    });
    return  <ul>
        {todoItems}
    </ul>;
}

export default TodoList;