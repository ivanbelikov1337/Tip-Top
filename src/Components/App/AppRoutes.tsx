import  {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Nurture from "../Nurture/Nurture";
import SearchNurture from "../Search/SearchNurture/SearchNurture";
import User from "../User/User";
import SingleVideo from "../Videos/SingleVideo/SingleVideo";

const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Nurture/>}/>
            <Route path={"/search"} element={<SearchNurture/>}/>
            <Route path={"/user/:uniqueId"} element={<User/>}/>
            <Route path={"/video/:id"} element={<SingleVideo/>}/>
        </Routes>
    );
}
export default AppRoutes;