export const initialState = {
    isLoggedIn : false,
    loginFailureMessage:null,
    userInfo : {},
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';



export const LOG_OUT = 'LOG_OUT';


// export const loginAction = (data) => {
//     return {
//         type : LOG_IN,
//         data : data
//     }
// };

export const logoutAction = {
    type : LOG_OUT,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST: {
            return {
                ...state,
                isLoggedIn : false,
                loginFailureMessage : null,
            }
        }
        case LOG_IN_SUCCESS: {
            return {
                ...state,
                isLoggedIn: true,
                userInfo : action.data,
                loginFailureMessage : null,
            }
        }
        case LOG_IN_FAILURE: {
            return {
                ...state,
                isLoggedIn: false,
                loginFailureMessage : action.data.message,
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false,
                userInfo : null,
            }
        }
        default : {
            return {
                ...state,
            }
        }
    }

};

export default reducer;
