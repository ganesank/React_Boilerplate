import React from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

import FormProfile from '../components/FormProfile';
import FormDelete from '../components/FormDelete';
import Modal from '../components/shared/Modal';

const ProfilePage: React.FC = () => {
    const modal = useSelector((state: RootStateOrAny) => state.modal);

    return (
        <div className="profile">
            <FormProfile />
            {modal.visible && (
                <Modal>
                    <FormDelete />
                </Modal>
            )}
        </div>
    );
};

export default ProfilePage;
