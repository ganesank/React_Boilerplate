import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import ApiForm from '../components/form/api/ApiForm';
import Alert from '../components/shared/Alert';
import Button from '../components/shared/Button';
import CTA from '../components/shared/CTA';
import Popup from '../components/shared/Popup';
import ApiTable from '../components/table/ApiTable';
import { setMsg } from '../redux/msg';
import { showPopup } from '../redux/popup';
import * as Type from '../utils/@types/0_types';
import * as requestHelper from '../utils/helpers/requestHelper';

const PORT: number = +process.env.REACT_APP_BACKEND_PORT!;
const URL: string =
    process.env.REACT_APP_ENV! === 'production'
        ? `${process.env.REACT_APP_BACKEND_URL!}/api/api`
        : `${process.env.REACT_APP_BACKEND_URL!}:${PORT}/api/api`;

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
    const [apis, setApis] = useState<Type.ApiForm[]>([]);
    const msg = useSelector((state: RootStateOrAny) => state.msg);
    const popup = useSelector((state: RootStateOrAny) => state.popup);
    const dispatch = useDispatch();
    const thead: Type.Thead[] = [
        { id: 'name', friendlyName: 'Name' },
        { id: 'url', friendlyName: 'URL' },
        { id: 'key', friendlyName: 'API Secret Key' },
        { id: 'value', friendlyName: 'API Secret Value' },
        { id: 'description', friendlyName: 'Description' },
        { id: 'status', friendlyName: 'Status' },
    ];

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
                const response = await requestHelper.postData(`${URL}`, {});
                if (!response.ok)
                    return dispatch(
                        setMsg({
                            msgs: [response.error.message],
                            msgColor: 'danger',
                            icon: '⚠',
                            iconColor: 'danger',
                        })
                    );
                const formatted: Type.ApiForm[] = response.data.map((api: Type.ApiForm) => ({
                    ...api,
                    active: api.active.toString(),
                }));
                setApis(formatted);
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

    const handleAdd: Type.HandleClickFn = () => {
        dispatch(
            showPopup({
                title: 'Add New API',
                children: true,
            })
        );
    };

    const handleEdit: Type.HandleClickDataFn<Type.ApiForm, number> = (_, api, idx) => {
        dispatch(
            showPopup({
                title: 'Edit API',
                children: true,
            })
        );
        setApi({ api: api!, idx: idx! });
    };

    const handleDelete: Type.HandleClickDataFn<Type.ApiForm, number> = async (_, api, idx) => {
        try {
            const response = await requestHelper.deleteData(`${URL}/${api!._id}`, {});
            if (!response.ok)
                return dispatch(
                    setMsg({
                        msgs: [response.error.message],
                        msgColor: 'danger',
                        icon: '⚠',
                        iconColor: 'danger',
                    })
                );

            setApis((prev: Type.ApiForm[]) => {
                return [...prev.slice(0, idx!), ...prev.slice(idx! + 1, prev.length)];
            });
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
                <ApiTable thead={thead} apis={apis} setApis={handleDelete} setApi={handleEdit} />
                {!popup.visible && msg.msgs.length > 0 && <Alert />}

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
