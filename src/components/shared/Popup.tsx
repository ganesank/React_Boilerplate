import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FC } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { hidePopup } from '../../redux/popup';
import * as Type from '../../utils/@types';
import Button from '../shared/Button';

const Popup: FC = ({ children }) => {
    const popup = useSelector((state: RootStateOrAny): Type.Popup => state.popup);
    const dispatch = useDispatch();

    const handleClose: Type.HandleClickFn = (e) => {
        e!.preventDefault();
        dispatch(hidePopup());
    };

    if (!popup.visible) return <></>;

    return (
        <div className="popup" onClick={handleClose}>
            <div className="popup__wrap" onClick={(e) => e.stopPropagation()}>
                <Button
                    btnType="link"
                    btnColor="danger"
                    faIcon={faTimes}
                    href="/"
                    handle="popup__close"
                    onClick={handleClose}
                />
                {popup.title !== '' && (
                    <div className="popup__header">
                        <h2>{popup.title}</h2>
                    </div>
                )}
                {popup.message !== '' && <div className="popup__body">{popup.message}</div>}
                {popup.children && <div className="popup__custom">{children}</div>}
            </div>
        </div>
    );
};

export default Popup;
