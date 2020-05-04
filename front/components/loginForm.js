import React, {useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LOG_IN_REQUEST} from "../reducers/user";

const LoginForm = () => {

    const {loginFailureMessage} = useSelector(state => state.user);

    const dispatch = useDispatch();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const onChangeEmail = useCallback((e) => {
        setEmail(e.target.value);
    },[]);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    },[]);

    const onSubmitForm = useCallback((e) => {
        e.preventDefault(); // 기본적인 서브밋 행동을 취소합니다

        dispatch({
            type: LOG_IN_REQUEST,
            data: {
                email : email,
                password : password,
            }
        });

    },[email,password]);

    return (
        <>
            <div>
                <form onSubmit={onSubmitForm}>
                    <input type="text" placeholder="email" value={email} onChange={onChangeEmail}/>
                    <br />
                    <input type="password" placeholder="password" value={password} onChange={onChangePassword}/>
                    <button type="submit">login</button>
                    {loginFailureMessage && <h1>{loginFailureMessage}</h1>}
                </form>
            </div>
        </>
    );
};

export default LoginForm;