import React from 'react';
import * as Type from '../../utils/@types/types';

const Textarea: React.FC<Type.Textarea> = ({
    name,
    value,
    onChange,
    label,
    handle,
    placeholder,
    required = false,
    disabled = false,
}) => {
    return (
        <div className={`textarea-container ${handle}`}>
            <textarea
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

export default Textarea;
