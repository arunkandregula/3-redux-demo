import Constants from '../constants/Constants';

let _currentId = 0;

const Utils = {
    getNextId: ()=>{
        debugger
        _currentId = Utils.loadDataFromLocalStorage(Constants.NEXT_ID);
        debugger
        if(_currentId == null){
            _currentId = 0;
        }
        return _currentId++;
    },
    getPreviousId(){
        return _currentId-1;
    },
    /*
    MOVED TO REDUCERS which have more knowledge on the internal structure of state
    filterTodos: (todos, filter)=>{
        debugger;
        return todos.filter((eachTodo)=>{
            switch(filter){
                case Constants.SHOW_ACTIVE: return !eachTodo.isCompleted;
                case Constants.SHOW_COMPLETED: return eachTodo.isCompleted;
                default:
                    break;
            }
            return true;
        });
    },
    */
    loadDataFromLocalStorage(attribute){
        debugger;
        try{
            const serializedData = localStorage.getItem('data');
            if(serializedData == null){
                return undefined;
            }
            const data = JSON.parse(serializedData);
            if(attribute != null){
                return data[attribute];    
            } else{
                return data;
            }
            
        }catch(err){
            console.log('ERROR----------', err);
            return undefined;

        }

    },
    saveDataToLocalStorage(data){
        debugger;
        try{
            const serializedData = JSON.stringify(data);
            localStorage.setItem('data', serializedData);
        } catch(err){
            // ignore write errors
            console.log('ERROR----------', err);
        }
    }


};

export default Utils;
