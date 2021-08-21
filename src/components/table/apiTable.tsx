import { faEdit, faTrash, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import * as Type from '../../utils/@types/0_types';
import { ApiForm } from '../../utils/@types/0_types';
import ButtonIcon from '../shared/ButtonIcon';
import CTA from '../shared/CTA';

const ApiTable: React.FC<Type.ApiTableC> = ({ thead, apis, setApis, setApi }) => {
    const [visible, setVisible] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        apis.forEach((api) => {
            const id: string = api._id!;
            setVisible((prev) => ({ ...prev, [id]: false }));
        });
    }, [apis]);

    const handleToggle: Type.HandleClickDataFn<ApiForm, null> = (_, api) => {
        const id: string = api!._id!;
        setVisible((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="api-table">
            <table>
                <thead>
                    <tr>
                        {thead.map((t, idx) => {
                            return (
                                <th className={`api-table__${t.id}`} key={idx}>
                                    {t.friendlyName}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {apis.map((api, idx) => {
                        const status: string = api.active ? 'enabled' : 'disabled';
                        const id: string = api!._id!;
                        return (
                            <tr key={idx}>
                                <th className={'api-table__name'}>
                                    <div>{api.name}</div>
                                </th>
                                <th className={'api-table__url'}>
                                    <div>
                                        <a rel="noopener noreferrer" target="_blank" href={api.url}>
                                            {api.url}
                                        </a>
                                    </div>
                                </th>
                                <th className={'api-table__key'}>
                                    <div>{visible[id] ? api.key : '***'}</div>
                                </th>
                                <th className={'api-table__value'}>
                                    <div>{visible[id] ? api.value : '***'}</div>
                                </th>
                                <th className={'api-table__description'}>
                                    <div>{api.description}</div>
                                </th>
                                <th className={'api-table__status'}>
                                    <CTA handle="api-table__cta">
                                        <div className={`api-table__status--${status}`}>{status}</div>
                                        <ButtonIcon
                                            faIcon={visible[id] ? faEye : faEyeSlash}
                                            btnColor={visible[id] ? 'success' : 'warning'}
                                            btnHoverColor={visible[id] ? 'success' : 'warning'}
                                            onClick={(e) => handleToggle(e, api)}
                                        />
                                        <ButtonIcon
                                            faIcon={faEdit}
                                            btnColor="primary"
                                            btnHoverColor="primary"
                                            onClick={(e) => setApi(e, api, idx)}
                                        />
                                        <ButtonIcon
                                            faIcon={faTrash}
                                            btnColor="danger"
                                            btnHoverColor="danger"
                                            onClick={(e) => setApis(e, api, idx)}
                                        />
                                    </CTA>
                                </th>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ApiTable;
