import { FC } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import AboutPage from './pages/AboutPage';
import ApiPage from './pages/ApiPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import SignUpPage from './pages/SignUpPage';
import * as Type from './utils/@types';

const App: FC = () => {
    const user = useSelector((state: RootStateOrAny): Type.User => state.user);

    const route =
        user && user.firstName ? (
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/api" element={<ApiPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/*" element={<Navigate replace to={'/'} />} />
            </Routes>
        ) : (
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
                <Route path="/*" element={<Navigate replace to={'/'} />} />
            </Routes>
        );

    return (
        <div className="app">
            <Header />
            <main>{route}</main>
            <Footer />
        </div>
    );
};

export default App;
