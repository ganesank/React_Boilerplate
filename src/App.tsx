import { FC } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import Footer from './components/base/Footer';
import Navbar from './components/base/Navbar';
import AboutPage from './pages/AboutPage';
import ApiPage from './pages/ApiPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import SignUpPage from './pages/SignUpPage';

const App: FC = () => {
    const user = useSelector((state: RootStateOrAny) => state.user);

    const route =
        user && user.firstName ? (
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/api" component={ApiPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route render={() => <Redirect to={{ pathname: '/' }} />} />
            </Switch>
        ) : (
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignUpPage} />
                <Route path="/reset-password/:token" component={ResetPasswordPage} />
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
