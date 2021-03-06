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
    const labelClass: string = label ? `select-wrap--${labelPosition} ` : '';
    const handleClass: string = handle ? handle : '';
    const customClass: string = `select-wrap ${labelClass}${handleClass}`;

    return (
        <div className={customClass}>
            <select title={name} name={name} value={value} onChange={onChange} required={required} disabled={disabled}>
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
