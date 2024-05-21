export const ACTIVE = "GET_USER_INFO"

export const getUserInfo = (info: {accessToken: string, userEmail: string}) => ({ type: ACTIVE, payload: info });

const initalState = {
    accessToken: "",
    userEmail: ""
}

export const userInfoSaver = (state = initalState, action: any) => {
    if(action.type === ACTIVE){
        return{
            ...state,
            accessToken: action.payload.accessToken,
            userEmail: action.payload.userEmail
        }
    } else {
        return state;
    }
}