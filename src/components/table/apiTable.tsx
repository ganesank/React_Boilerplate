import { faEdit, faTrash, faEye, faEyeSlash, faCopy } from '@fortawesome/free-solid-svg-icons';
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

    const handleCopy: Type.HandleClickDataFn<string, null> = async (_, text) => {
        await navigator.clipboard.writeText(text!);
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
                                    <div className={'api-table__no-overflow'}>
                                        <div className="api-table__no-overflow--text">{api.name}</div>
                                    </div>
                                </th>
                                <th className={'api-table__url'}>
                                    <div className={'api-table__no-overflow'}>
                                        <div className="api-table__no-overflow--text">
                                            <a rel="noopener noreferrer" target="_blank" href={api.url}>
                                                {api.url}
                                            </a>
                                        </div>
                                        <ButtonIcon
                                            handle="copy copy--right"
                                            faIcon={faCopy}
                                            btnColor="grey"
                                            btnHoverColor="grey"
                                            onClick={(e) => handleCopy(e, api.url)}
                                        />
                                    </div>
                                </th>
                                <th className={'api-table__key'}>
                                    <div className={'api-table__no-overflow'}>
                                        <div className="api-table__no-overflow--text">
                                            {visible[id] ? api.key : '***'}
                                        </div>
                                        {visible[id] && (
                                            <ButtonIcon
                                                handle="copy copy--right"
                                                faIcon={faCopy}
                                                btnColor="grey"
                                                btnHoverColor="grey"
                                                onClick={(e) => handleCopy(e, api.key)}
                                            />
                                        )}
                                    </div>
                                </th>
                                <th className={'api-table__value'}>
                                    <div className={'api-table__no-overflow'}>
                                        <div className="api-table__no-overflow--text">
                                            {visible[id] ? api.value : '***'}
                                        </div>
                                        {visible[id] && (
                                            <ButtonIcon
                                                handle="copy copy--right"
                                                faIcon={faCopy}
                                                btnColor="grey"
                                                btnHoverColor="grey"
                                                onClick={(e) => handleCopy(e, api.value)}
                                            />
                                        )}
                                    </div>
                                </th>
                                <th className={'api-table__description'}>
                                    <div className={'api-table__no-overflow'}>
                                        <div className="api-table__no-overflow--text">{api.description}</div>
                                    </div>
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
