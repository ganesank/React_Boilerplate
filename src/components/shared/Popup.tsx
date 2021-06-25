import React from 'react';
import { useDispatch } from 'react-redux';
import { hidePopup } from '../../redux/popup';
import * as Type from '../../utils/@types/types';

const Popup: React.FC = ({ children }) => {
    const dispatch = useDispatch();

    const handleClose: Type.HandleClickFn = () => {
        dispatch(hidePopup());
    };

    return (
        <div className="popup" onClick={handleClose}>
            {children}
        </div>
    );
};

export default Popup;
