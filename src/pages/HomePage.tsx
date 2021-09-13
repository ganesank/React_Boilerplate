import { FC } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';

const HomePage: FC = () => {
    const user = useSelector((state: RootStateOrAny) => state.user);
    return (
        <div className="home-page">
            <div className="container">
                <h1>HOME PAGE</h1>
                <br />
                <h2>Welcome {user ? `${user.firstName} ${user.lastName}` : 'Guest'}</h2>
            </div>
        </div>
    );
};

export default HomePage;
