import React, { useState, useEffect } from 'react';
import * as type from '../utils/@types/types';

const ErrorMsg: React.FC<type.ErrorMsgComponentProps> = ({
    errorMsg,
    cleanErrorMsg,
}) => {
    const [msg, setMsg] = useState<string>('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setMsg('');
            cleanErrorMsg();
        }, 5000);
        setMsg(errorMsg);

        return () => {
            clearTimeout(timer);
        };
    }, [errorMsg, cleanErrorMsg]);

    return (
        <div className="error-msg">
            {msg && (
                <>
                    <span className="error-msg__icon">⚠</span> {msg}
                </>
            )}
        </div>
    );
};

export default ErrorMsg;
