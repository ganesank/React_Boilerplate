import React from 'react';
import * as Type from '../../utils/@types/types';

const CTA: React.FC<Type.CTA> = ({ handle, justify = 'left', align = 'center', direction = 'row', children }) => {
    const handleClass: string = handle ? `${handle}` : '';
    const directionClass: string = `cta-container__${direction} `;
    const justifyClass: string = `cta-container__${direction}--${justify} `;
    const alignClass: string = `cta-container__${direction}--${align} `;
    const customClass: string = `cta-container ${justifyClass}${alignClass}${directionClass}${handleClass}`;

    return <div className={customClass}>{children}</div>;
};

export default CTA;
