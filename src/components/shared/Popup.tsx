import React from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { hidePopup } from '../../redux/popup';
import * as Type from '../../utils/@types/types';

const Popup: React.FC = ({ children }) => {
    const popup = useSelector((state: RootStateOrAny) => state.popup);
    const dispatch = useDispatch();

    const handleClose: Type.HandleClickFn = (e) => {
        e.preventDefault();
        dispatch(hidePopup());
    };

    return (
        <div className="popup" onClick={handleClose}>
            <div className="popup__container" onClick={(e) => e.stopPropagation()}>
                <a href="/" className="popup__close" onClick={handleClose}>
                    x
                </a>
                {popup.title !== '' && (
                    <div className="popup__header">
                        <h3>{popup.title}</h3>
                    </div>
                )}
                {popup.message !== '' && <div className="popup__body">{popup.message}</div>}
                {popup.children && <div className="popup__custom">{children}</div>}
            </div>
        </div>
    );
};

export default Popup;
