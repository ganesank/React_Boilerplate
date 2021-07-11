import React from 'react';
import * as Type from '../../utils/@types/types';

const CTA: React.FC<Type.CTA> = ({ handle, align = 'left', direction = 'row', children }) => {
    const handleClass: string = handle ? `cta-container--${handle}` : '';
    const directionClass: string = `cta-container__${direction} `;
    const alignClass: string = `cta-container__${direction}--${align} `;
    const customClass: string = `cta-container ${alignClass}${directionClass}${handleClass}`;

    return <div className={customClass}>{children}</div>;
};

export default CTA;
