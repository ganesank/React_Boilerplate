import React from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

const HomePage: React.FC = () => {
    const user = useSelector((state: RootStateOrAny) => state.user);
    return (
        <div className="home-page container">
            <h1>HOME PAGE</h1>
            <br />
            <h2>Hello {user ? `${user.firstName} ${user.lastName}` : 'World'}</h2>
        </div>
    );
};

export default HomePage;
