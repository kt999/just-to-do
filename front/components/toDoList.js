import React, {useCallback, useEffect, useState} from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import {TODO_ADD_REQUEST,TODO_DONE_REQUEST} from "../reducers/toDoList";

const DummyUser = {
    "id": 1,
    "nickname":"kt999",
};

const ToDoContent = ({id,content,isDone}) => {

    const dispatch = useDispatch();

    const onClickDone = () => {
        dispatch({
            type: TODO_DONE_REQUEST,
            data: {
                id : id,
            }
        });
    };

    return (
        <>
            {(isDone == 0) ?
                <div className="todo_content_yet">
                    {content}
                    <button onClick={onClickDone}>done</button>
                </div>
                :
                <div className="todo_content_done">
                    {content}
                </div>
            }
        </>
    )
};

const ToDoForm = () => {

    const dispatch = useDispatch();

    const [addContent,setAddContent] = useState('');

    const onChangeContent = useCallback((e) => {
        setAddContent(e.target.value);
    },[]);

    const onSubmitForm = useCallback((e) => {
        e.preventDefault(); // 기본적인 서브밋 행동을 취소합니다

        dispatch({
            type: TODO_ADD_REQUEST,
            data: {
                id : 10,
                content : addContent,
                isDone : 0,
            }
        });

        setAddContent('');

    },[addContent]);

    return (
        <>
            <div className="todo_form">
                <form onSubmit={onSubmitForm}>
                    <input type="text" placeholder="input to do" value={addContent} onChange={onChangeContent}/>
                    <button type="submit">add</button>
                </form>
            </div>
        </>
    )
};

const ToDoList = () => {

    const {toDoContent} = useSelector(state => state.toDoList);

    return (
        <>
            <div className="all">
                <div className="todo_box">
                    <div className="todo_title">{DummyUser.nickname}님의 To Do List</div>
                    <ToDoForm/>
                    {toDoContent.map(object => (
                        <ToDoContent
                            key = {object.id}
                            id = {object.id}
                            content = {object.content}
                            isDone = {object.isDone}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default ToDoList;
