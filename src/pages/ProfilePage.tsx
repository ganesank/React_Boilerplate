import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

import FormProfile from '../components/FormProfile';
import FormDelete from '../components/FormDelete';
import Popup from '../components/shared/Popup';

const ProfilePage: React.FC = () => {
    const popup = useSelector((state: RootStateOrAny) => state.popup);

    return (
        <div className="profile">
            <FormProfile />
            {popup.visible && (
                <Popup>
                    <FormDelete />
                </Popup>
            )}
        </div>
    );
};

export default ProfilePage;
