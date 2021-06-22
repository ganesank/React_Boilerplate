import React from 'react';
import { useDispatch } from 'react-redux';
import { hideModal } from '../redux/modal';
import * as Type from '../utils/@types/types';

const Modal: React.FC = ({ children }) => {
    const dispatch = useDispatch();

    const handleClose: Type.HandleClickFn = () => {
        dispatch(hideModal());
    };

    return (
        <div className="modal" onClick={handleClose}>
            {children}
        </div>
    );
};

export default Modal;
