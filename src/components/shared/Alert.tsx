import React, { useEffect } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { removeMsgs } from '../../redux/messages';

const Alert: React.FC = () => {
    const msgs = useSelector((state: RootStateOrAny) => state.msgs);
    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(removeMsgs());
        }, 10000);
        return () => {
            clearTimeout(timer);
            dispatch(removeMsgs());
        };
    }, [dispatch]);

    const icon = (
        <div className={msgs.iconColor ? `alert__icon alert__icon--${msgs.iconColor}` : `alert__icon`}>{msgs.icon}</div>
    );

    const messages = msgs.msgs.map((item: string, idx: number) => {
        return (
            <div key={idx} className={`alert__msg alert__msg--${msgs.msgColor}`}>
                {item}
            </div>
        );
    });

    return (
        <div className="alert">
            {msgs.msgs.length > 0 && msgs.icon && icon}
            <div className="alert__msg-container">{messages}</div>
        </div>
    );
};

export default Alert;
