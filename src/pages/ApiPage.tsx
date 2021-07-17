import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import ApiForm from '../components/form/api/ApiForm';
import Button from '../components/shared/Button';
import CTA from '../components/shared/CTA';
import Popup from '../components/shared/Popup';
import { showPopup } from '../redux/popup';
import * as Type from '../utils/@types/types';

const ApiPage: React.FC = () => {
    const popup = useSelector((state: RootStateOrAny) => state.popup);
    const dispatch = useDispatch();

    const handleAdd: Type.HandleClickFn = () => {
        dispatch(
            showPopup({
                title: 'Add New API',
                children: true,
            })
        );
    };

    return (
        <div className="api-page">
            <div className="api-page__menu">
                <CTA handle="api-page__sub-menu">
                    <Button btnColor="success" onClick={handleAdd} faIcon={faPlus} />
                </CTA>
            </div>
            <div className="container">
                <h1>API</h1>
                {popup.visible && !popup.custom && (
                    <Popup>
                        <ApiForm />
                    </Popup>
                )}
            </div>
        </div>
    );
};

export default ApiPage;
