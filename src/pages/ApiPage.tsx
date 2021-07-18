import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import ApiForm from '../components/form/api/ApiForm';
import Button from '../components/shared/Button';
import CTA from '../components/shared/CTA';
import Popup from '../components/shared/Popup';
import ApiTable from '../components/table/apiTable';
import { setMsg } from '../redux/msg';
import { showPopup } from '../redux/popup';
import * as Type from '../utils/@types/types';
import * as requestHelper from '../utils/helpers/requestHelper';

const PORT: number = +process.env.REACT_APP_BACKEND_PORT!;
const URL: string =
    process.env.REACT_APP_ENV! === 'production'
        ? `${process.env.REACT_APP_BACKEND_URL!}/api/apis`
        : `${process.env.REACT_APP_BACKEND_URL!}:${PORT}/api/apis`;

const ApiPage: React.FC = () => {
    const initialState: { api: Type.ApiForm; idx: number } = {
        api: {
            _id: '',
            name: '',
            url: '',
            key: '',
            value: '',
            description: '',
            active: 'true',
        },
        idx: -1,
    };
    const [api, setApi] = useState(initialState);
    const popup = useSelector((state: RootStateOrAny) => state.popup);
    const [apis, setApis] = useState<Type.ApiForm[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!popup.visible) {
            setApi({
                api: {
                    _id: '',
                    name: '',
                    url: '',
                    key: '',
                    value: '',
                    description: '',
                    active: 'true',
                },
                idx: -1,
            });
        }
    }, [popup]);

    useEffect(() => {
        (async () => {
            try {
                const response = await requestHelper.getData(`${URL}`);
                if (!response.ok)
                    return dispatch(
                        setMsg({
                            msgs: [response.error.message],
                            msgColor: 'danger',
                            icon: '⚠',
                            iconColor: 'danger',
                        })
                    );

                setApis(response.data);
            } catch (error) {
                dispatch(
                    setMsg({
                        msgs: [error.message],
                        msgColor: 'danger',
                        icon: '⚠',
                        iconColor: 'danger',
                    })
                );
            }
        })();
    }, [dispatch]);

    const handleAdd: Type.HandleClickFn<null, null> = (_) => {
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
                {apis.length > 0 && <ApiTable apis={apis} setApis={setApis} setApi={setApi} />}
                {popup.visible && !popup.custom && (
                    <Popup>
                        <ApiForm setApis={setApis} data={api} />
                    </Popup>
                )}
            </div>
        </div>
    );
};

export default ApiPage;
