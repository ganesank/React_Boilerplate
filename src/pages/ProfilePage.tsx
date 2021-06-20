import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

import FormProfile from '../components/FormProfile';
import FormDelete from '../components/FormDelete';
import Modal from '../components/Modal';
import AlertMsg from '../components/AlertMsg';

const ProfilePage: React.FC = () => {
    const modal = useSelector((state: RootStateOrAny) => state.modal);
    const msgs = useSelector((state: RootStateOrAny) => state.msgs);

    return (
        <div className="profile">
            <FormProfile />
            {modal !== '' && (
                <Modal>
                    <FormDelete />
                </Modal>
            )}
            {msgs.msgs.length > 0 && <AlertMsg />}
        </div>
    );
};

export default ProfilePage;
