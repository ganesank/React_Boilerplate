import React from 'react';
import * as Type from '../../utils/@types/types';

const Select: React.FC<Type.Select> = ({
    name,
    value,
    options,
    onChange,
    label,
    handle,
    required = false,
    disabled = false,
}) => {
    return (
        <div className={`select-container ${handle}`}>
            <select name={name} value={value} onChange={onChange} required={required} disabled={disabled}>
                {options.map((option) => {
                    return (
                        <option key={option.key} value={option.key}>
                            {option.value}
                        </option>
                    );
                })}
            </select>
            {label && <label htmlFor={name}>{label}</label>}
        </div>
    );
};

export default Select;
