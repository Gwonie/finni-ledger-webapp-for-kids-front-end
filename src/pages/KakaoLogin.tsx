import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function KakaoLogin(){
    const navigate = useNavigate();

    useEffect(() => {
        const code = new URL(window.location.href).searchParams.get('code');
        const REDIRECT_URI = '/user/login/kakao/callback';

        const params = {
            code: code
        }

        try{
            axios.get(`${process.env.REACT_APP_BACKEND_IP}${REDIRECT_URI}`, {params})
            .then(res => {
                console.log(res.data);
                navigate('/');
            })
        } catch(err){
            console.error(err);
            alert('로그인 실패');
            navigate(-1);
        }
        
    }, []);

    return (
        null
    );
    
}