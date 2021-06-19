import React, { useEffect } from 'react';
import * as Type from '../utils/@types/types';

const AlertMsg: React.FC<Type.AlertMsgProps> = ({ msgs, icon, iconColor, msgColor, cleanMsg }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            cleanMsg();
        }, 10000);

        return () => {
            clearTimeout(timer);
        };
    }, [msgs, cleanMsg]);

    const el =
        msgs.length > 0 &&
        msgs.map((item, idx) => {
            return (
                <div key={idx} className={`alert-msg__msg alert-msg__msg--${msgColor}`}>
                    {item}
                </div>
            );
        });

    return (
        <div className="alert-msg">
            {msgs.length > 0 && icon && (
                <div className={iconColor ? `alert-msg__icon alert-msg__icon--${iconColor}` : `alert-msg__icon`}>
                    {icon}
                </div>
            )}
            <div className="alert-msg__msg-container">{el}</div>
        </div>
    );
};

export default AlertMsg;
