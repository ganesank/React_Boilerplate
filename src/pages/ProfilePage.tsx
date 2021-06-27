import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

import FormProfile from '../components/FormProfile';
import FormDelete from '../components/FormDelete';
import Popup from '../components/shared/Popup';
import AlertMsg from '../components/shared/AlertMsg';

const ProfilePage: React.FC = () => {
    const popup = useSelector((state: RootStateOrAny) => state.popup);
    const msgs = useSelector((state: RootStateOrAny) => state.msgs);

    return (
        <div className="profile-page container">
            <h1>PROFILE</h1>
            <FormProfile />
            {!popup.visible && msgs.msgs.length > 0 && <AlertMsg />}
            {popup.visible && (
                <Popup>
                    <FormDelete />
                </Popup>
            )}
        </div>
    );
};

export default ProfilePage;
