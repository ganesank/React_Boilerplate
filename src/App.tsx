import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useSelector, RootStateOrAny } from 'react-redux';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import AboutPage from './pages/AboutPage';

const App: React.FC = () => {
    const user = useSelector((state: RootStateOrAny) => state.user);

    const route =
        user && user.firstName ? (
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route render={() => <Redirect to={{ pathname: '/' }} />} />
            </Switch>
        ) : (
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/signup" component={SignUpPage} />
                <Route render={() => <Redirect to={{ pathname: '/' }} />} />
            </Switch>
        );

    return (
        <div className="app">
            <Navbar />
            <main>{route}</main>
            <Footer />
        </div>
    );
};

export default App;
