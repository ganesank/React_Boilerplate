import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ApiForm from '../components/form/api/ApiForm';
import Button from '../components/shared/Button';
import CTA from '../components/shared/CTA';
import * as Type from '../utils/@types/types';

const ApiPage: React.FC = () => {
    const handleAdd: Type.HandleClickFn = () => {
        console.log('Clicked');
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
                <ApiForm />
            </div>
        </div>
    );
};

export default ApiPage;
