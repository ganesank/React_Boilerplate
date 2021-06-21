import React from 'react';
import { useDispatch } from 'react-redux';
import { setModalMsg } from '../redux/modal';
import * as Type from '../utils/@types/types';

const Modal: React.FC = ({ children }) => {
    const dispatch = useDispatch();

    const handleClose: Type.HandleClickFn = () => {
        dispatch(setModalMsg(''));
    };

    return (
        <div className="modal" onClick={handleClose}>
            <a href="/" className="modal__close" onClick={handleClose}>
                X
            </a>
            {children}
        </div>
    );
};

export default Modal;
