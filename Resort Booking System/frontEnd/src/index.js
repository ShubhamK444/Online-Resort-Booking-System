
import ReactDOM from "react-dom/client";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './css/Style.css'
import { Provider } from 'react-redux'
import store from './store/store'


import { RouterProvider } from "react-router-dom";

import customRouer from './Routing.js'
import App from "./components/App";

const root =ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <Provider store={store}><RouterProvider router={customRouer}>
        <App/>
    </RouterProvider></Provider>
)