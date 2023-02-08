import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getLoginState } from '../redux/auth/selectors/loginSelector';
import { mainRouter } from '../routers/mainRouter';
import RequiredAuth from './RequiredAuth';

const AppRouter = () => {
    const { isAuth } = useSelector(getLoginState);

    console.log(`This is AppRouter with isAuth = ${isAuth}`);

    return (
            // !isAuth
            // ?  
            // <Routes>
            // {publicRouter.map(route => 
            //     <Route key={route.path} path={route.path} element={route.element} />
            // )}
            // </Routes>
            // :
            // <Routes>
            // {privateRouter.map(route => 
            //     <Route key={route.path} path={route.path} element={route.element} />
            // )}
            // </Routes>            
            <Routes>
                {mainRouter.map(route => 
                    <Route key={route.path} path={route.path} element={route.isAuth ? <RequiredAuth>{route.element}</RequiredAuth> : route.element} />
                )}
                {/* <Route key={RoutesNames.COURSELIST} path={RoutesNames.COURSELIST} element={<RequiredAuth><CourseList/></RequiredAuth>} /> */}
            </Routes>
    );
};
 

export default AppRouter;