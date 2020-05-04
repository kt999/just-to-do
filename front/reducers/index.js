import { combineReducers } from "redux";
import user from './user';
import toDoList from './toDoList';


const rootReducer = combineReducers({
    user,
    toDoList,
});

export default rootReducer;