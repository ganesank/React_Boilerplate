import React, { useEffect } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import { removeMsgs } from '../redux/messages';

const AlertMsg: React.FC = () => {
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
        <div className={msgs.iconColor ? `alert-msg__icon alert-msg__icon--${msgs.iconColor}` : `alert-msg__icon`}>
            {msgs.icon}
        </div>
    );

    const messages = msgs.msgs.map((item: string, idx: number) => {
        return (
            <div key={idx} className={`alert-msg__msg alert-msg__msg--${msgs.msgColor}`}>
                {item}
            </div>
        );
    });

    return (
        <div className="alert-msg">
            {msgs.msgs.length > 0 && msgs.icon && icon}
            <div className="alert-msg__msg-container">{messages}</div>
        </div>
    );
};

export default AlertMsg;
