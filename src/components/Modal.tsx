import React from 'react';
import { useDispatch } from 'react-redux';
import { clearMsg } from '../redux/modal';

const Modal: React.FC = ({ children }) => {
    const dispatch = useDispatch();

    const handleClose = (): void => {
        dispatch(clearMsg());
    };

    return (
        <div className="modal" onClick={handleClose}>
            {children}
        </div>
    );
};

export default Modal;
