import React from 'react';
import { AddTodo } from '../AddTodo';
import { TodoList } from '../TodoList';
import Footer from '../Footer/Footer';

const TodoApp = ()=>(
    <div className="TodoApp">
        <AddTodo />
        <TodoList />
        <Footer />
    </div>
);
       

export default TodoApp;    