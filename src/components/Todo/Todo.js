import classNames from 'classnames';
import React from 'react';
import './Todo.css';

const Todo = ({todo, clickHandler})=>{
	debugger;
    const classList = classNames({
        'Todo': true,
        'completed': todo.isCompleted
    });

    return <li className={classList} onClick={clickHandler}>{todo.text}</li>;
}

export default Todo;