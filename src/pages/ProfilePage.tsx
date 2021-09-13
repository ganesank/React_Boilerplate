import { FC, useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import Alert from '../components/shared/Alert';
import Popup from '../components/shared/Popup';
import UserDeleteForm from '../components/user/UserDeleteForm';
import UserProfileForm from '../components/user/UserProfileForm';
import { removeMsg } from '../redux/msg';

const ProfilePage: FC = () => {
    const popup = useSelector((state: RootStateOrAny) => state.popup);
    const msg = useSelector((state: RootStateOrAny) => state.msg);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(removeMsg());
        };
    }, [dispatch]);

    return (
        <div className="profile-page">
            <div className="container">
                <h1>PROFILE</h1>
                <UserProfileForm />
                {!popup.visible && msg.msgs.length > 0 && <Alert />}
                {popup.visible && (
                    <Popup>
                        <UserDeleteForm />
                    </Popup>
                )}
            </div>
        </div>
    );
};

export default ProfilePage;
