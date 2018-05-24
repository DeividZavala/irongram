import React from 'react';
import {Switch, Route} from 'react-router-dom';
import FeedContainer from './components/feed/feed-container';
import AuthForm from "./components/auth-form/auth-form";
import Profile from './components/profile/profile';

export const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={FeedContainer}/>
            <Route path='/login' component={AuthForm}/>
            <Route path='/signup' component={AuthForm}/>
            <Route path='/profile' component={Profile}/>
        </Switch>
    )
};