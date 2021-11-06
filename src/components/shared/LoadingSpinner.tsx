import { FC } from 'react';
import * as Type from '../../utils/@types';

const LoadingSpinner: FC<Type.LoadingSpinner> = ({ handle, color }) => {
    const colorClass: string = color ? `loading-spinner--${color}` : '';
    const customClass: string = `loading-spinner ${colorClass}`;

    return (
        <div className={handle}>
            <div className={customClass}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
