// import {HashRouter as Router,Route,Switch} from "react-router-dom";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react'
import MyHome from "../home"

export default function IRouter(){

    return   <Router>
                {/* <Switch>
                    <Route exact path = "/" component={MyHome}></Route>
                </Switch> */}
                 <Routes>
                    <Route path="/" exact element={<MyHome/>}/>
                    {/* <Route path="/history" element={<History/>}/>
                    <Route path="/about" element={<About/>}/> */}
                </Routes>

            </Router>
}