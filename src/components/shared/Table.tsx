import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import * as Type from '../../utils/@types/types';
import ButtonIcon from '../shared/ButtonIcon';
import CTA from '../shared/CTA';

const Table: React.FC<Type.Table> = ({ handle, thead, data, handleEdit, handleDelete, cta = true }) => {
    const columnsCount: number = thead.length;

    return (
        <div className="table">
            <table cellPadding={0} cellSpacing={0}>
                <thead>
                    <tr className="table__row">
                        {thead &&
                            thead.map((column, idx) => (
                                <th key={`h-${idx}`} className={`table__title table__item ${handle}--${column.id}`}>
                                    {column.friendlyName}
                                </th>
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row: Type.Obj, idx: number) => (
                        <tr key={`r-${idx}`} className="table__row">
                            {thead.map((column, idx2) => (
                                <td key={`c-${idx2}`} className={`table__item ${handle}--${column.id}`}>
                                    <div className="table__div">
                                        <span>
                                            {row[column.id].toString() === 'true'
                                                ? 'enabled'
                                                : row[column.id].toString() === 'false'
                                                ? 'disabled'
                                                : row[column.id]}
                                        </span>
                                        {cta && columnsCount === idx2 + 1 && (
                                            <CTA handle="table__cta">
                                                <ButtonIcon
                                                    faIcon={faEdit}
                                                    btnHoverColor="primary"
                                                    onClick={(e) => handleEdit!(e, row, idx)}
                                                />
                                                <ButtonIcon
                                                    faIcon={faTrash}
                                                    btnHoverColor="danger"
                                                    onClick={(e) => handleDelete!(e, row, idx)}
                                                />
                                            </CTA>
                                        )}
                                    </div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
