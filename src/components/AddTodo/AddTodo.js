import React from 'react';
import ActionCreator from '../../actions/ActionCreator';

const AddTodo = ({dispatch})=>{
    let inputRef;
    const addTodo = ()=>{
        dispatch(ActionCreator.getAddTodoAction({
            text: inputRef.value
        }));
        inputRef.value = '';
    }
    return <div><input type="text" ref={node => { inputRef = node; }} ></input><button onClick={addTodo} >Add Todo</button></div>;
}

export default AddTodo;
