import React from 'react';
import Head from "next/head";
import withRedux from 'next-redux-wrapper';
import {applyMiddleware, compose, createStore} from "redux";
import AppLayout from "../components/layout";
import PropTypes from "prop-types";

import createSagaMiddleware from 'redux-saga';
import rootSaga from "../sagas";

import { CookiesProvider } from 'react-cookie';

import '../public/css/toDoList.css';


import { Provider } from 'react-redux';
import reducer from '../reducers';

const NodeBird = ({Component,store}) => {

    return (
        <>
            <Provider store = {store}>
                <CookiesProvider>

                    <Head>
                        <title>Just To Do</title>
                    </Head>
                    <AppLayout>
                        <Component/>
                    </AppLayout>

                </CookiesProvider>
            </Provider>
        </>
    )
};

NodeBird.propTypes = {
    Component : PropTypes.elementType,
    store : PropTypes.object,
};

export default withRedux( (initialState, options) => {

    //middlewares and combind
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];
    const enhancer = compose(
        applyMiddleware(...middlewares),
    );

    const store = createStore(reducer,initialState,enhancer);

    sagaMiddleware.run(rootSaga);

    return store;
})(NodeBird);