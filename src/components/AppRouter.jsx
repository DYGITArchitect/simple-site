import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getLoginState } from '../redux/auth/selectors/loginSelector';
import { privateRouter } from '../routers/privateRouter';
import { publicRouter } from '../routers/publicRouter';

const AppRouter = () => {
    const { isAuth } = useSelector(getLoginState);

    console.log(`This is AppRouter with isAuth = ${isAuth}`);
    //console.log(`This is AppRouter with username = ${username}`);

    // return (         
    //     <Routes>
    //         {!isAuth && <Route path="login" element={<Login />} />}
    //         {isAuth && <Route path="courses" element={<CourseList />} />}
    //         <Route path="/" element={<MainPage />} />
    //         <Route path="about" element={<About />} />
    //         <Route path="*" element={<Navigate to="/" />} />
    //         {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
    //     </Routes>
    // );

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

    return (
            !isAuth
            ?  
            <Routes>
            {publicRouter.map(route => 
                <Route key={route.path} path={route.path} element={route.element} />
            )}
            </Routes>
            :
            <Routes>
            {privateRouter.map(route => 
                <Route key={route.path} path={route.path} element={route.element} />
            )}
            </Routes>
    );
};
 

export default AppRouter;