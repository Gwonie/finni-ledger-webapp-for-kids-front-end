import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserInfo } from "reducers/userInfo";

export default function OAuthHandler(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();

    const code = new URL(window.location.href).searchParams.get('code');
    const params = {
        code: code
    }

    const { pathname } = location;

    let REDIRECT_URI = ""
    if(pathname === "/auth/kakao/callback"){
        REDIRECT_URI = '/user/login/kakao/callback';
    } else {
        REDIRECT_URI = '/user/login/naver/callback';
    }

    async function login(){
        try{
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_IP}${REDIRECT_URI}`, {params});
            dispatch(getUserInfo({accessToken: res.data.access_token, userEmail: res.data.user_email}));
            navigate('/');
        } catch(err){
            console.error(err);
            alert('로그인 실패');
            navigate(-1);
        }

    }

    useEffect(() => {
        login();
    }, []);

    return (
        null
    );
    
}