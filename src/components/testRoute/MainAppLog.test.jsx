import {render, screen, act} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import {timeOut} from "../../utils/mocks";
import {RoutesNames} from "../../routers";
import {mainAppLogHelper} from "./helper/mainAppLogHelper";

describe('Test login and logout', function () {

    test('login', async()=>{
        render(mainAppLogHelper(RoutesNames.COURSELIST));

        expect(screen.getByTestId(RoutesNames.MAIN)).toBeInTheDocument();
        const butLink = screen.getByTestId('course-link');
        userEvent.click(butLink);
        expect(screen.queryByTestId(RoutesNames.COURSELIST)).toBeNull();

        const butLogin = screen.getByTestId('button-login');
        await act( async () => {//без act тест проходит, но в конце ошибка, что нужно с act
            /*console.error
            Warning: An update to MainApp inside a test was not wrapped in act(...).

                When testing, code that causes React state updates should be wrapped into act(...):

            act(() => {
                 fire events that update state
            });
             assert on the output

            This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act
             */
            userEvent.click(butLogin);
            await timeOut(1);//не работает без ожидания, пока не понимаю, как дождаться конца выполнения функции
        });
        userEvent.click(butLink);
        expect(screen.getByTestId(RoutesNames.COURSELIST)).toBeInTheDocument();
    });

    test('logout', async()=>{
        render(mainAppLogHelper(RoutesNames.COURSELIST));

        /* нужен если test logout запускать отдельно, не нужен если запускать describe

        expect(screen.getByTestId(RoutesNames.MAIN)).toBeInTheDocument();
        const butLink = screen.getByTestId('course-link');
        userEvent.click(butLink);
        expect(screen.queryByTestId(RoutesNames.COURSELIST)).toBeNull();

        const butLogin = screen.getByTestId('button-login');
        await act( async () => {//без act тест проходит, но в конце ошибка, что нужно с act
            userEvent.click(butLogin);
            await timeOut(1);//не работает без ожидания
        });
        userEvent.click(butLink);
        expect(screen.getByTestId(RoutesNames.COURSELIST)).toBeInTheDocument();
        */

        const butLink = screen.getByTestId('course-link');
        userEvent.click(butLink);
        expect(screen.getByTestId(RoutesNames.COURSELIST)).toBeInTheDocument();

        const butLogout = screen.getByTestId('button-logout');
        await act( async () => {
            userEvent.click(butLogout);
            await timeOut(1);
        });
        expect(screen.getByTestId(RoutesNames.MAIN)).toBeInTheDocument();
        userEvent.click(butLink);
        expect(screen.getByTestId(RoutesNames.MAIN)).toBeInTheDocument();

    });
});