import {all, fork} from 'redux-saga/effects';
import user from './user';
import toDoList from './toDoList';
import axios from 'axios';


axios.defaults.baseURL = "http://localhost:8080";


export default function* rootSaga () {
    yield all([
        fork(user),
        fork(toDoList),
    ]);
};