import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import * as Type from '../../utils/@types';

const Button: FC<Type.Button> = ({
    value,
    icon,
    faIcon,
    handle,
    hover = false,
    iconDirection = 'left',
    direction = 'row',
    disabled = false,
    type = 'button',
    btnType = 'btn',
    btnColor,
    onClick,
    href = '/',
}) => {
    if (direction === 'column' && (iconDirection === 'left' || iconDirection === 'right')) iconDirection = 'top';
    if (disabled) btnColor = 'disabled';
    if (icon && faIcon) faIcon = undefined;

    const handleClass: string = handle ? `${handle}` : '';
    const hoverClass: string = hover ? '' : `btn--no-hover `;
    const directionClass: string = `btn__${direction} `;
    const btnColorClass: string = btnColor ? `btn--${btnColor} ` : '';
    const customClass: string = `btn ${hoverClass}${btnColorClass}${directionClass}${handleClass}`;

    const valueClass: string = value ? `btn__${direction}__value btn__${direction}__value--${iconDirection} ` : '';
    const iconClass: string =
        icon || faIcon ? `btn__${direction}__icon btn__${direction}__icon--${value ? iconDirection : 'center'} ` : '';

    return (
        <>
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
        </>
    );
};

export default Button;
