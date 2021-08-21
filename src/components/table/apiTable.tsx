import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { setMsg } from '../../redux/msg';
import { showPopup } from '../../redux/popup';
import * as Type from '../../utils/@types/0_types';
import * as requestHelper from '../../utils/helpers/requestHelper';
import Alert from '../shared/Alert';
import ButtonIcon from '../shared/ButtonIcon';
import CTA from '../shared/CTA';

const PORT: number = +process.env.REACT_APP_BACKEND_PORT!;
const URL: string =
    process.env.REACT_APP_ENV! === 'production'
        ? `${process.env.REACT_APP_BACKEND_URL!}/api/api`
        : `${process.env.REACT_APP_BACKEND_URL!}:${PORT}/api/api`;

const ApiTable: React.FC<Type.ApiTableC> = ({ apis, setApis, setApi }) => {
    const msg = useSelector((state: RootStateOrAny) => state.msg);
    const popup = useSelector((state: RootStateOrAny) => state.popup);
    const dispatch = useDispatch();

    const handleEdit: Type.HandleClickFn<Type.ApiForm, number> = (_, api, idx) => {
        dispatch(
            showPopup({
                title: 'Add New API',
                children: true,
            })
        );
        setApi({ api, idx });
    };

    const handleDelete: Type.HandleClickFn<Type.ApiForm, number> = async (_, api, idx) => {
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
        <div className="api-table">
            <li>
                <ul className="api-table__row">
                    <li>
                        <ul className="api-table__item">
                            <div className="api-table__title api-table__item__name">Name</div>
                        </ul>
                        <ul className="api-table__item">
                            <div className="api-table__title api-table__item__url">URL</div>
                        </ul>
                        <ul className="api-table__item">
                            <div className="api-table__title api-table__item__key">API Secret Key</div>
                        </ul>
                        <ul className="api-table__item">
                            <div className="api-table__title api-table__item__value">API Secret Value</div>
                        </ul>
                        <ul className="api-table__item">
                            <div className="api-table__title api-table__item__description">Description</div>
                        </ul>
                        <ul className="api-table__item">
                            <div className="api-table__title api-table__item__active">Status</div>
                        </ul>
                    </li>
                </ul>
                {apis.map((api, idx) => {
                    const status: string = api.active ? 'enabled' : 'disabled';
                    const statusClass: string = `api-table__item__active api-table__item__active--${status}`;

                    return (
                        <ul key={api._id} className="api-table__row">
                            <li>
                                <ul className="api-table__item">
                                    <div className="api-table__item__name">{api.name}</div>
                                </ul>
                                <ul className="api-table__item">
                                    <div className="api-table__item__url">{api.url}</div>
                                </ul>
                                <ul className="api-table__item">
                                    <div className="api-table__item__key">{api.key}</div>
                                </ul>
                                <ul className="api-table__item">
                                    <div className="api-table__item__value">{api.value}</div>
                                </ul>
                                <ul className="api-table__item">
                                    <div className="api-table__item__description">{api.description}</div>
                                </ul>
                                <ul className="api-table__item">
                                    <div className={statusClass}>
                                        <CTA handle="api-table__cta">
                                            <span>{status}</span>
                                            <ButtonIcon
                                                faIcon={faEdit}
                                                btnHoverColor="primary"
                                                onClick={(e) => handleEdit(e, api, idx)}
                                            />
                                            <ButtonIcon
                                                faIcon={faTrash}
                                                btnHoverColor="danger"
                                                onClick={(e) => handleDelete(e, api, idx)}
                                            />
                                        </CTA>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    );
                })}
            </li>
            {!popup.visible && msg.msgs.length > 0 && <Alert />}
        </div>
    );
};

export default ApiTable;
