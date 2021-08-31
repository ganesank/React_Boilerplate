import React from 'react';
import * as Type from '../../utils/@types/0_types';

const CTA: React.FC<Type.CTA> = ({ handle, justify = 'flex-end', align = 'center', direction = 'row', children }) => {
    const handleClass: string = handle ? `${handle}` : '';
    const directionClass: string = `cta__${direction} `;
    const justifyClass: string = `cta__${direction}--justify-${justify} `;
    const alignClass: string = `cta__${direction}--align-${align} `;
    const customClass: string = `cta ${justifyClass}${alignClass}${directionClass}${handleClass}`;

    return <div className={customClass}>{children}</div>;
};

export default CTA;
