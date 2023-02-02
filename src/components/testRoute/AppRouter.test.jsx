import {render, screen, act} from '@testing-library/react';
import {appRouterHelper} from "./helper/appRouterHelper";
import {RoutesNames} from "../../routers";

describe('Test public router', function () {

    test('main', ()=>{
        render(appRouterHelper(RoutesNames.MAIN));
        expect(screen.getByTestId(RoutesNames.MAIN)).toBeInTheDocument();
    });

    test('about', ()=>{
        render(appRouterHelper(RoutesNames.ABOUT));
        expect(screen.getByTestId(RoutesNames.ABOUT)).toBeInTheDocument();
    });

    test('training', ()=>{
        render(appRouterHelper(RoutesNames.TRAINIGLIST));
        expect(screen.getByTestId(RoutesNames.TRAINIGLIST)).toBeInTheDocument();
    });

    test('course', ()=>{
        render(appRouterHelper(RoutesNames.COURSELIST));
        expect(screen.queryByTestId(RoutesNames.COURSELIST)).toBeNull();
        expect(screen.getByTestId(RoutesNames.MAIN)).toBeInTheDocument();
    });

    test('incorrect', ()=>{
        render(appRouterHelper('/asdasgfhdasdasd'));
        expect(screen.getByTestId(RoutesNames.MAIN)).toBeInTheDocument();
    });

});