import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

import FormProfile from '../components/form/FormProfile';
import FormDelete from '../components/form/FormDelete';
import Popup from '../components/shared/Popup';
import Alert from '../components/shared/Alert';

const ProfilePage: React.FC = () => {
    const popup = useSelector((state: RootStateOrAny) => state.popup);
    const msgs = useSelector((state: RootStateOrAny) => state.msgs);

    return (
        <div className="profile-page container">
            <h1>PROFILE</h1>
            <FormProfile />
            {!popup.visible && msgs.msgs.length > 0 && <Alert />}
            {popup.visible && (
                <Popup>
                    <FormDelete />
                </Popup>
            )}
        </div>
    );
};

export default ProfilePage;
