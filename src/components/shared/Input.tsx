import React from 'react';
import * as Type from '../../utils/@types/0_types';

const Input: React.FC<Type.Input> = ({
    name,
    value,
    onChange,
    label,
    labelPosition = 'bottom',
    handle,
    placeholder,
    type = 'text',
    required = false,
    disabled = false,
    autoComplete,
    minLength,
}) => {
    const labelClass: string = label ? `input-container--${labelPosition} ` : '';
    const handleClass: string = handle ? handle : '';
    const customClass: string = `input-container ${labelClass}${handleClass}`;

    return (
        <div className={customClass}>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder ? placeholder : ''}
                required={required}
                disabled={disabled}
                autoComplete={autoComplete ? autoComplete : ''}
                minLength={minLength ? minLength : 0}
            />
            {label && <label htmlFor={name}>{label}</label>}
        </div>
    );
};

export default Input;
