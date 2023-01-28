import {useDispatch, useSelector} from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from '../pages/About';
import CourseList from '../pages/CourseList';
import Login from '../pages/Login';
import MainPage from '../pages/MainPage';
import { privateRouter } from '../routers/privateRouter';
import { publicRouter } from '../routers/publicRouter';
import {useEffect, useState} from "react";
import {getAuthLocalStoreValues, logout} from "../services/auth/authApi";

const AppRouter = () => {
    console.log("AppRouter");
    //const dispatch = useDispatch();
   // dispatch(getAuthLocalStoreValues());

    const { isAuth, username } = useSelector((state) => state.login);

    // useEffect(() => {
    //     console.log("useEffectAppRouter"); // Временно пока нет сервиса
    //     //console.log(isAuth); // Временно пока нет сервиса
    //     //dispatch(getAuthLocalStoreValues());
    //     //dispatch(logout({ username: "dyg2" }));
    //     // console.log(username); // Временно пока нет сервиса
    //     //setIsAuth(false);
    // }, [dispatch]);

    console.log(`This is AppRouter with isAuth = ${isAuth}`);
    console.log(`This is AppRouter with isAuth = ${username}`);

    return (         
        <Routes>
            {!isAuth && <Route path="login" element={<Login />} />}
            { /*console.log(`useEffectAppRouterRoutes`)}
            { console.log(isAuth) */}
            {isAuth && <Route path="courses" element={<CourseList />} />}
            <Route path="/" element={<MainPage />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Navigate to="/" />} />
            {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
    );

    // return (         
    //     <Routes>
    //     !isAuth
    //     ? 
    //     {publicRouter.map(route => 
    //         <Route key={route.path} path={route.path} element={route.element} />
    //     )}
    //     :
    //     {privateRouter.map(route => 
    //         <Route key={route.path} path={route.path} element={route.element} />
    //     )}
    //     </Routes>
    // );

    // return (
    //         !isAuth
    //         ?  
    //         <Routes>
    //         {publicRouter.map(route => 
    //             <Route key={route.path} path={route.path} element={route.element} />
    //         )}
    //         </Routes>
    //         :
    //         <Routes>
    //         {privateRouter.map(route => 
    //             <Route key={route.path} path={route.path} element={route.element} />
    //         )}
    //         </Routes>
    // );
};
 

export default AppRouter;