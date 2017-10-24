import {v4} from 'node-uuid';
import Constants from '../constants/Constants';

const fakeDatabase = {
  todos: [{
    id: v4(),
    text: 'hey',
    isCompleted: true,
  }, {
    id: v4(),
    text: 'ho',
    isCompleted: true,
  }, {
    id: v4(),
    text: 'let’s go',
    isCompleted: false,
  }],
};

function delay(ms){
  return new Promise((resolve, reject)=>{
    setTimeout(resolve, ms);
  })
}

export const fetchTodos = (filter)=> 
  delay(1000).then(()=>{ 
    switch(filter){
      case Constants.SHOW_COMPLETED: return fakeDatabase.todos.filter((eachTodo)=>eachTodo.isCompleted);
      case Constants.SHOW_ACTIVE: return fakeDatabase.todos.filter((eachTodo)=>!eachTodo.isCompleted);
      default:
        return fakeDatabase.todos;
    }
  })

