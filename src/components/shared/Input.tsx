import { FC } from 'react';
import * as Type from '../../utils/@types';

const Input: FC<Type.Input> = ({
    name,
    value,
    onChange,
    onKeyPress,
    label,
    labelPosition = 'bottom',
    handle,
    placeholder = '',
    type = 'text',
    required = false,
    disabled = false,
    autoComplete = 'off',
    minLength,
}) => {
    const labelClass: string = label ? `input-wrap--${labelPosition} ` : '';
    const handleClass: string = handle ? handle : '';
    const customClass: string = `input-wrap ${labelClass}${handleClass}`;

    return (
        <div className={customClass}>
            {!onKeyPress && (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                    autoComplete={autoComplete}
                    minLength={minLength ? minLength : 0}
                />
            )}
            {onKeyPress && (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onKeyPress={(e) => onKeyPress(e)}
                    placeholder={placeholder}
                    required={required}
                    disabled={disabled}
                    autoComplete={autoComplete}
                    minLength={minLength ? minLength : 0}
                />
            )}
            {label && <label htmlFor={name}>{label}</label>}
        </div>
    );
};

export default Input;
