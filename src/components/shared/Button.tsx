import React from 'react';
import { Link } from 'react-router-dom';
import * as Type from '../../utils/@types/types';

const Button: React.FC<Type.Button> = ({
    handle,
    value,
    iconDirection = 'left',
    direction = 'row',
    type = 'button',
    btnType = 'btn',
    btnColor,
    disabled = false,
    children,
    onClick,
    href = '/',
}) => {
    if (direction === 'column' && (iconDirection === 'left' || iconDirection === 'right')) iconDirection = 'top';
    if (disabled) btnColor = 'disabled';

    const handleClass: string = handle ? `${handle}` : '';
    const directionClass: string = `btn-container__${direction} `;
    const btnColorClass: string = btnColor ? `btn-container--${btnColor} ` : '';
    const customClass: string = `btn-container ${btnColorClass}${directionClass}${handleClass}`;

    const valueClass: string = value
        ? `btn-container__${direction}__value btn-container__${direction}__value--${iconDirection} `
        : '';
    const iconClass: string = children
        ? `btn-container__${direction}__icon btn-container__${direction}__icon--${iconDirection} `
        : '';

    return (
        <div className={customClass}>
            {btnType === 'btn' && (
                <button className={customClass} disabled={disabled} type={type} onClick={onClick ? onClick : () => ''}>
                    {value && <div className={valueClass}>{value}</div>}
                    {children && <div className={iconClass}>{children}</div>}
                </button>
            )}
            {btnType === 'link' && (
                <Link className={customClass} to={href} onClick={onClick}>
                    {value && <div className={valueClass}>{value}</div>}
                    {children && <div className="btn-container__icon">{children}</div>}
                </Link>
            )}
        </div>
    );
};

export default Button;
