import { FC, useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import Alert from '../components/shared/Alert';
import Popup from '../components/shared/Popup';
import UserDeleteForm from '../components/user/UserDeleteForm';
import UserProfileForm from '../components/user/UserProfileForm';
import { removeMsg } from '../redux/msg';
import { hidePopup } from '../redux/popup';
import * as Type from '../utils/@types';

const ProfilePage: FC = () => {
    const msg = useSelector((state: RootStateOrAny): Type.Msg => state.msg);
    const popup = useSelector((state: RootStateOrAny): Type.Popup => state.popup);
    const dispatch = useDispatch();

    useEffect(() => {
        if (popup.visible) dispatch(hidePopup());
        if (msg.msgs.length > 0) dispatch(removeMsg());
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="profile-page">
            <div className="container">
                <h1>PROFILE</h1>
                <UserProfileForm />
                {!popup.visible && <Alert />}
                <Popup>
                    <UserDeleteForm />
                </Popup>
            </div>
        </div>
    );
};

export default ProfilePage;
