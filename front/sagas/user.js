import {
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE
} from '../reducers/user';
import {error} from "next/dist/build/output/log";
import { all, call,delay, fork, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import Router from 'next/router';

// const getCookie = (name) => {
//     var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
//     return value? value[2] : null;
// };

const setCookie = (name, value, exp) => {
    var date = new Date();
    date.setTime(date.getTime() + exp*24*60*60*1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
};

function loginAPI(loginData) {

    // 서버에 요청을 보내는 부분

    return axios({
        method: 'post',
        url: '/login',
        headers: {
            "Content-Type": "application/json",
            // "x-access-token": getCookie("x-access-token"),
        },
        data: loginData,
    });

}

function* login(action) {
    try {
        //call -> sync
        const {data} = yield call(loginAPI,action.data);

        if(data.isSuccess === true){

            //jwt토큰
            setCookie('x-access-token', data.result, 30); /* 30일 뒤 만료됨 */

            yield put({ // put은 dispatch 동일
                type: LOG_IN_SUCCESS,
                data:action.data
            });

            Router.push('/main');
        }
        else{
            yield put({ // put은 dispatch 동일
                type: LOG_IN_FAILURE,
                data:{
                    message:data.message,
                }
            });
        }

    } catch (e) { // loginAPI 실패
        console.error(e);
    }
}

function* watchLogin() {
    yield takeEvery(LOG_IN_REQUEST, login);
}


export default function* userSaga () {
    yield all([
        fork(watchLogin),
    ]);
};