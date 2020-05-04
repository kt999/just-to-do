export const initialState = {
    toDoContent : [
        {
            "id" : 1,
            "content" : "할일 1",
            "isDone" : 0,
        },
        {
            "id" : 2,
            "content" : "할일 2",
            "isDone" : 0,
        },
        {
            "id" : 3,
            "content" : "할일 3",
            "isDone" : 1,
        }
    ],
    test:'',
};

export const TODO_ADD_REQUEST = 'TODO_ADD_REQUEST';
export const TODO_ADD_SUCCESS = 'TODO_ADD_SUCCESS';

export const TODO_DONE_REQUEST = 'TODO_DONE_REQUEST';
export const TODO_DONE_SUCCESS = 'TODO_DONE_SUCCESS';


const reducer = (state = initialState, action) => {

    switch (action.type) {
        case TODO_ADD_REQUEST: {

            return {
                ...state,
            };
        }
        case TODO_ADD_SUCCESS: {

            return {
                ...state,
                toDoContent : [...state.toDoContent, action.data],
            };
        }
        case TODO_DONE_REQUEST: {

            return {
                ...state,
            };
        }
        case TODO_DONE_SUCCESS: {

            const postIndex = state.toDoContent.findIndex(v=>v.id === action.data.id);
            state.toDoContent[postIndex]["isDone"] = 1;

            return {
                ...state,
                toDoContent : [...state.toDoContent],
            };
        }
        default : {
            return {
                ...state,
            };
        }
    }

};

export default reducer;