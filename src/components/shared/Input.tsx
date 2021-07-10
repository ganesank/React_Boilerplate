import React from 'react';
import * as Type from '../../utils/@types/types';

const Input: React.FC<Type.Input> = ({
    name,
    value,
    onChange,
    label,
    handle,
    placeholder,
    type = 'text',
    required = false,
    disabled = false,
}) => {
    return (
        <div className={`input-container ${handle}`}>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
            />
            {label && <label htmlFor={name}>{label}</label>}
        </div>
    );
};

export default Input;
