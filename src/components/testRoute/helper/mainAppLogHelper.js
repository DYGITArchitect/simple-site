import {MemoryRouter} from "react-router-dom";
import {store} from "../../../store/store";
import {Provider} from "react-redux";
import MainApp from "../../../MainApp";

export const mainAppLogHelper = (initialRoute = '') => {
    return (
        <Provider store={store}>
            <MemoryRouter initialEntries={["/"+initialRoute]}>
                <MainApp/>
            </MemoryRouter>
        </Provider>
    )
}
