import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from '../pages/About';
import CourseList from '../pages/CourseList';
import Login from '../pages/Login';
import MainPage from '../pages/MainPage';
import { privateRouter } from '../routers/privateRouter';
import { publicRouter } from '../routers/publicRouter';

const AppRouter = () => {
    const { isAuth } = useSelector((state) => state.login);

    console.log(`This is AppRouter with isAuth = ${isAuth}`);
    //console.log(`This is AppRouter with username = ${username}`);

    return (         
        <Routes>
            {!isAuth && <Route path="login" element={<Login />} />}
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