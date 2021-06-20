import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

const HomePage: React.FC = () => {
    const user = useSelector((state: RootStateOrAny) => state.user);
    return (
        <div>
            <h1>Hello {user ? `${user.firstName} ${user.lastName}` : 'World'}</h1>
        </div>
    );
};

export default HomePage;
