import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import Landing from './pages/Landing';
import Cars from './pages/Cars';
import Register from './pages/register';
import Profile from './pages/Profile';
import NewRent from './pages/NewRent';
import Admin from './pages/Admin';
import NewCar from './pages/NewCar';

 
function Routes(){
    return(
        <BrowserRouter>
            <Route path = "/" exact component = {Landing}/>
            <Route path = "/cars" component={Cars}/>
            <Route path = "/register" component={Register}/>
            <Route path = "/profile" component={Profile}/>
            <Route path = "/rent" component={NewRent}/>
            <Route path = "/admin" component={Admin}/>
            <Route path = "/new" component={NewCar}/>
        </BrowserRouter>
    )
}

export default Routes;