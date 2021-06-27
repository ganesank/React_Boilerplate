import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { removeMsg } from '../../redux/msg';

const Alert: React.FC = () => {
    const msg = useSelector((state: RootStateOrAny) => state.msg);
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(removeMsg());
        }, 10000);
        return () => {
            clearTimeout(timer);
            dispatch(removeMsg());
        };
    }, [dispatch]);

    const icon = (
        <div className={msg.iconColor ? `alert__icon alert__icon--${msg.iconColor}` : `alert__icon`}>{msg.icon}</div>
    );

    const messages = msg.msgs.map((item: string, idx: number) => {
        return (
            <div key={idx} className={`alert__msg alert__msg--${msg.msgColor}`}>
                {item}
            </div>
        );
    });

    return (
        <div className="alert">
            {msg.msgs.length > 0 && msg.icon && icon}
            <div className="alert__msg-container">{messages}</div>
        </div>
    );
};

export default Alert;
