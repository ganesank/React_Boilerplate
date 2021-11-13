import { FC, useEffect, useRef } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { removeMsg } from '../../redux/msg';
import * as Type from '../../utils/@types';

const Alert: FC = () => {
    const msg = useSelector((state: RootStateOrAny): Type.Msg => state.msg);
    const dispatch = useDispatch();
    const timer: any = useRef();

    useEffect(() => {
        if (msg.msgs.length > 0) {
            timer.current = setTimeout(() => {
                dispatch(removeMsg());
            }, 10000);
        }
        return () => {
            timer.current && clearTimeout(timer.current);
        };
    }, [dispatch, msg, timer]);

    const icon = msg.icon && (
        <div className={msg.iconColor ? `alert__icon alert__icon--${msg.iconColor}` : `alert__icon`}>{msg.icon}</div>
    );

    const messages = msg.msgs.map((item, idx) => {
        return (
            <div key={`msg_${idx}`} className={`alert__msg alert__msg--${msg.msgColor}`}>
                {item}
            </div>
        );
    });

    if (msg.msgs.length === 0) return <></>;

    return (
        <div className="alert">
            {icon}
            <div className="alert__msg-wrap">{messages}</div>
        </div>
    );
};

export default Alert;
