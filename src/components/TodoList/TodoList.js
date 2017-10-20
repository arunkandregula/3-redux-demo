import React from 'react';
import Todo from '../Todo/Todo';

const TodoList = ({todos, onTodoClick})=>{
	debugger
    const todoItems =  todos.map((eachTodo)=>{
    	debugger
        return <Todo key={eachTodo.id} todo={eachTodo} clickHandler={onTodoClick.bind(null, eachTodo.id)} />;
    });
    return  <ul>
        {todoItems}
    </ul>;
}

export default TodoList;