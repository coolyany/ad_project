import logo from './logo.svg';
import './App.css';
import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import router from "./router"
function App() {
    return <Suspense>{useRoutes(router)}</Suspense>;
}

export default App;
