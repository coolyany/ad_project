// import {HashRouter as Router,Route,Switch} from "react-router-dom";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react'
import MyHome from "../home"
import AdInfo from '../page/adinfo'

export default function IRouter(){

    return   <Router>
                {/* <Switch>
                    <Route exact path = "/" component={MyHome}></Route>
                </Switch> */}
                 <Routes>
                    <Route path="/" exact element={<MyHome/>}/>
                    <Route path="/adinfo" element={<AdInfo/>}/>
                    {/* <Route path="/" element={<About/>}/> */}
                </Routes>

            </Router>
}