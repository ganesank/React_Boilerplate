import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    onClick,
    href = '/',
    icon,
    faIcon,
}) => {
    if (direction === 'column' && (iconDirection === 'left' || iconDirection === 'right')) iconDirection = 'top';
    if (disabled) btnColor = 'disabled';
    if (icon && faIcon) faIcon = undefined;

    const handleClass: string = handle ? `${handle}` : '';
    const directionClass: string = `btn-container__${direction} `;
    const btnColorClass: string = btnColor ? `btn-container--${btnColor} ` : '';
    const customClass: string = `btn-container ${btnColorClass}${directionClass}${handleClass}`;

    const valueClass: string = value
        ? `btn-container__${direction}__value btn-container__${direction}__value--${iconDirection} `
        : '';
    const iconClass: string =
        icon || faIcon
            ? `btn-container__${direction}__icon btn-container__${direction}__icon--${
                  value ? iconDirection : 'center'
              } `
            : '';

    return (
        <div className={customClass}>
            {btnType === 'btn' && (
                <button className={customClass} disabled={disabled} type={type} onClick={onClick ? onClick : () => ''}>
                    {value && <div className={valueClass}>{value}</div>}
                    {icon && <img src={icon} className={iconClass} alt="Icon" />}
                    {faIcon && <FontAwesomeIcon icon={faIcon} className={iconClass} />}
                </button>
            )}
            {btnType === 'link' && (
                <Link className={customClass} to={href} onClick={onClick}>
                    {value && <div className={valueClass}>{value}</div>}
                    {icon && <img src={icon} className={iconClass} alt="Icon" />}
                    {faIcon && <FontAwesomeIcon icon={faIcon} className={iconClass} />}
                </Link>
            )}
        </div>
    );
};

export default Button;
