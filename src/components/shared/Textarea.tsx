import React from 'react';
import * as Type from '../../utils/@types/0_types';

const Textarea: React.FC<Type.Textarea> = ({
    name,
    value,
    onChange,
    label,
    labelPosition = 'bottom',
    handle,
    placeholder,
    required = false,
    disabled = false,
}) => {
    const labelClass: string = label ? `textarea-container--${labelPosition} ` : '';
    const handleClass: string = handle ? handle : '';
    const customClass: string = `textarea-container ${labelClass}${handleClass}`;

    return (
        <div className={customClass}>
            <textarea
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder ? placeholder : ''}
                required={required}
                disabled={disabled}
            />
            {label && <label htmlFor={name}>{label}</label>}
        </div>
    );
};

export default Textarea;
