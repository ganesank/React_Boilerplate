import { FC } from 'react';
import * as Type from '../../utils/@types/types';

const Input: FC<Type.Input> = ({
    name,
    value,
    onChange,
    onKeyPress,
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
            {!onKeyPress && (
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
            )}
            {onKeyPress && (
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onKeyPress={(e) => onKeyPress(e)}
                    placeholder={placeholder ? placeholder : ''}
                    required={required}
                    disabled={disabled}
                    autoComplete={autoComplete ? autoComplete : ''}
                    minLength={minLength ? minLength : 0}
                />
            )}
            {label && <label htmlFor={name}>{label}</label>}
        </div>
    );
};

export default Input;
