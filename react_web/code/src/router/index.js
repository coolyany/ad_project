// import {HashRouter as Router,Route,Switch} from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from 'react'
import { Navigate, RouteObject } from "react-router-dom";

const MyHome = React.lazy(() => import("../home"));
const AdInfo = React.lazy(() => import("../page/adinfo"));
const UserInfo = React.lazy(() => import("../page/userinfo"));
const MyContent = React.lazy(() => import("../page/content"));


// export default function IRouter(){

//     return   <Router>
//                 {/* <Switch>
//                     <Route exact path = "/" component={MyHome}></Route>
//                 </Switch> */}
//                  <Routes>
//                     <Route path="/" exact element={<MyHome/>} />
//                     <Route path="/adinfo" element={<AdInfo/>}/>
//                     <Route path="/userinfo" element={<UserInfo/>}/>
//                 </Routes>

//             </Router>
// }

export const RouterPath = {
    home: "/main",
    content: "/main/content",
    adinfo: "/main/adinfo",
    userinfo: "/main/userinfo",
  };

  const router = [
    { index:true, element: <Navigate to={RouterPath.home} /> },
    { path: RouterPath.home, element: <MyHome />,
        children:[
            { index: true, element: <Navigate to={RouterPath.content} /> },
            { path: RouterPath.content, element: <MyContent /> },
            { path: RouterPath.adinfo, element: <AdInfo /> },
            { path: RouterPath.userinfo, element: <UserInfo /> },
        ]
    }
    // {
    //     path: RouterPath.home,
    //     element: <MyHome />,
    //     children: [

    //     ]
    // }
  ]

export default router;
