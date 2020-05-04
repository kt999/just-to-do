import { TODO_ADD_REQUEST,TODO_ADD_SUCCESS,TODO_DONE_REQUEST,TODO_DONE_SUCCESS } from '../reducers/toDoList';
import {error} from "next/dist/build/output/log";
import { all, call,delay, fork, put, takeEvery } from 'redux-saga/effects';
import Router from 'next/router';


function toDoAddAPI(toDoData) {
    // 서버에 요청을 보내는 부분
    return "hihi";
}

function* toDoAdd(action) {
    try {
        //call -> sync
        const result = yield call(toDoAddAPI,action.data);

        yield put({ // put은 dispatch 동일
            type: TODO_ADD_SUCCESS,
            data: action.data,
        });

        // Router.push('/');

    } catch (e) { // loginAPI 실패
        console.error(e);
    }
}

function toDoDoneAPI(toDoData) {
    // 서버에 요청을 보내는 부분
    return "hihi";
}

function* toDoDone(action) {
    try {
        //call -> sync
        const result = yield call(toDoDoneAPI,action.data);

        yield put({ // put은 dispatch 동일
            type: TODO_DONE_SUCCESS,
            data: action.data,
        });

        // Router.push('/');

    } catch (e) { // loginAPI 실패
        console.error(e);
    }
}

function* watchToDoAdd() {
    yield takeEvery(TODO_ADD_REQUEST, toDoAdd);
}

function* watchToDoDone() {
    yield takeEvery(TODO_DONE_REQUEST, toDoDone);
}

export default function* toDoSaga () {
    yield all([
        fork(watchToDoAdd),
        fork(watchToDoDone),
    ]);
};