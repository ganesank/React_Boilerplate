import { FC } from 'react';
import * as Type from '../../utils/@types';

const Textarea: FC<Type.Textarea> = ({
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
    const labelClass: string = label ? `textarea-wrap--${labelPosition} ` : '';
    const handleClass: string = handle ? handle : '';
    const customClass: string = `textarea-wrap ${labelClass}${handleClass}`;

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
