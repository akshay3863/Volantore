import React from "react";
import AppRoutes from "./routes";
import ThemeProvider from "theme";
import {Provider} from "react-redux";
import store from "./store/store";
import LoadingBar from "react-top-loading-bar";
import Toast from "./Layout/Toast";
import history from "./components/history";
import CustomRouter from "./components/CustomBrowserRouter";
import axios from "axios";
import cookie from "./utils/cookie";

function App() {
    const loading = <LoadingBar color="#4640DE" progress={100}/>;
    axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
    axios.defaults.headers.common['Authorization'] = `Bearer ${cookie.get("jwt")}`;

    return (
        <Provider store={store}>
            <ThemeProvider>
                <React.Suspense fallback={loading}>
                    <Toast/>
                    <CustomRouter history={history}>
                        <AppRoutes/>
                    </CustomRouter>
                </React.Suspense>
            </ThemeProvider>
        </Provider>
    );
}

export default App;

