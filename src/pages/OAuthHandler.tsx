import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setToken } from "reducers/auth";

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
            const data = res.data;
            dispatch(setToken(data.access_token));
            navigate('/');
        } catch(err){
            console.log(err);
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