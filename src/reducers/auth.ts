import { defaultMaxListeners } from "events";

export const SET = "SET_TOKEN"
export const DELETE = "DELETE_TOKEN"

export const TOKEN_TIME_OUT = 30 * 60 * 1000;

export const setToken = (accessToken: string) => ({type: SET, payload: accessToken});
export const deleteToken = () => ({type: DELETE});


const initalState = {
    authenticated: false,
    accessToken: "",
    expireTime: 0
}

export const auth = (state = initalState, action: any) => {
    switch (action.type){
        case SET:
            return{
                ...state,
                authenticated: true,
                accessToken: action.payload,
                expireTime: new Date().getTime() + TOKEN_TIME_OUT,
            }
        case DELETE:
            return{
                ...state,
                authenticated: false,
                accessToken: "",
                expireTime: 0,
            }
        default:
            return state;
    }
}