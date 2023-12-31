import Inquiry from "components/myPage/Inquiry";
import MyAllowance from "components/myPage/MyAllowance";
import Outline from "components/myPage/Outline";
import Profile from "components/myPage/Profile";
import ProfileImages from "components/myPage/ProfileImages";
import QuitOrNot from "components/myPage/QuitOrNot";
import { Route, Routes } from "react-router-dom";

export default function MyPage(){
    return(
        <Routes>
            <Route path='/outline' element={<Outline/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/profile/images' element={<ProfileImages/>} />
            <Route path='/allowance' element={<MyAllowance/>} />
            <Route path='/inquiry' element={<Inquiry />} />
        </Routes>    
    )
}