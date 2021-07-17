import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { hidePopup } from '../../redux/popup';
import * as Type from '../../utils/@types/types';
import Button from '../shared/Button';

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
                <Button btnType="link" value="x" href="/" handle="popup__close" onClick={handleClose} />
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
