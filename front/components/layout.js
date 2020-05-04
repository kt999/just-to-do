import React, {useCallback, useEffect} from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";

import { Layout,Menu ,Button} from 'antd';
import {loginAction, logoutAction} from "../reducers/user";
const { Header, Content, Sider } = Layout;
import { useCookies } from 'react-cookie';


const AppLayout = ({children}) => {

    // const [cookies, setCookie] = useCookies(['x-access-token']);
    // setCookie('x-access-token', "kiteak", { path: '/' });



    return (
        <>
            {children}
        </>
    );

};

export default AppLayout;
