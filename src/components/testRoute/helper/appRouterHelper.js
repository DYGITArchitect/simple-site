import {MemoryRouter} from "react-router-dom";
import {store} from "../../../store/store";
import {Provider} from "react-redux";
import AppRouter from "../../AppRouter";

export const appRouterHelper = (initialRoute = '') => {
    return (
        <Provider store={store}>
            <MemoryRouter initialEntries={["/"+initialRoute]}>
                <AppRouter />
            </MemoryRouter>
        </Provider>
    )
}
