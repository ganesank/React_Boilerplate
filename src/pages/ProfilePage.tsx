import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

import FormProfile from '../components/FormProfile';
import FormDelete from '../components/FormDelete';
import Modal from '../components/Modal';

const ProfilePage: React.FC = () => {
    const modal = useSelector((state: RootStateOrAny) => state.modal);

    return (
        <div className="profile">
            <FormProfile />
            {modal !== '' && (
                <Modal>
                    <FormDelete />
                </Modal>
            )}
        </div>
    );
};

export default ProfilePage;
