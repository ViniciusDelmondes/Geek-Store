import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'

import Home from './pages/Home/index'
import Detalhes1 from './pages/detalhes/detalhes1'
import Detalhes2 from './pages/detalhes/detalhes2'
import Detalhes3 from './pages/detalhes/detalhes3'
import Detalhes4 from './pages/detalhes/detalhes4'
import Detalhes5 from './pages/detalhes/detalhes5'
import Detalhes6 from './pages/detalhes/detalhes6'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Detalhes1} path="/detalhes1"/>
            <Route component={Detalhes2} path="/detalhes2"/>
            <Route component={Detalhes3} path="/detalhes3"/>
            <Route component={Detalhes4} path="/detalhes4"/>
            <Route component={Detalhes5} path="/detalhes5"/>
            <Route component={Detalhes6} path="/detalhes6"/>
        </BrowserRouter>
    )
}

export default Routes;
