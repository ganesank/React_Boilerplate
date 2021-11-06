import { FC } from 'react';
import * as Type from '../../utils/@types';

const Select: FC<Type.Select> = ({
    name,
    value,
    options,
    onChange,
    label,
    labelPosition = 'bottom',
    handle,
    required = false,
    disabled = false,
}) => {
    const labelClass: string = label ? `select-container--${labelPosition} ` : '';
    const handleClass: string = handle ? handle : '';
    const customClass: string = `select-container ${labelClass}${handleClass}`;

    return (
        <div className={customClass}>
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
