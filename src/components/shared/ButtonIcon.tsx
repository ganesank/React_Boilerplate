import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import * as Type from '../../utils/@types';

const ButtonIcon: FC<Type.ButtonIcon> = ({
    icon,
    faIcon,
    handle,
    disabled = false,
    type = 'button',
    btnType = 'btn',
    btnColor,
    btnHoverColor,
    onClick,
    href = '/',
}) => {
    if (disabled) {
        btnColor = 'disabled';
        btnHoverColor = 'disabled';
    }
    if (icon && faIcon) faIcon = undefined;

    const handleClass: string = handle ? `${handle}` : '';
    const btnColorClass: string = btnColor ? `btn-icon--${btnColor} ` : '';
    const btnHoverColorClass: string = btnHoverColor ? `btn-icon--hover-${btnHoverColor} ` : '';
    const customClass: string = `btn-icon ${btnColorClass}${btnHoverColorClass}${handleClass}`;
    const iconClass: string = 'btn-icon__icon';

    return (
        <div className={customClass}>
            {btnType === 'btn' && (
                <button className={customClass} disabled={disabled} type={type} onClick={onClick ? onClick : () => ''}>
                    {icon && <img src={icon} className={iconClass} alt="Icon" />}
                    {faIcon && <FontAwesomeIcon icon={faIcon} className={iconClass} />}
                </button>
            )}
            {btnType === 'link' && (
                <Link className={customClass} to={href} onClick={onClick}>
                    {icon && <img src={icon} className={iconClass} alt="Icon" />}
                    {faIcon && <FontAwesomeIcon icon={faIcon} className={iconClass} />}
                </Link>
            )}
        </div>
    );
};

export default ButtonIcon;
