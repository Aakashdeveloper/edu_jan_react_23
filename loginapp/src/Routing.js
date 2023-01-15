import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Register from './Component/Register';
import Login from './Component/login';
import Profile from './Component/profile';

const Routing = () => {
    return (
        <BrowserRouter>
            <Header/>
                <div className='container'>
                    <Route exact path="/" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/profile" component={Profile} />
                </div>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;