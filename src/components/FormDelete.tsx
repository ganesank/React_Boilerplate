import React, { useState, FormEvent, ChangeEvent, MouseEvent } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearMsg } from '../redux/modal';
import { deleteUser } from '../redux/user';
import * as alertMsgHelper from '../utils/helpers/alertMsgHelper';
import * as type from '../utils/@types/types';

import AlertMsg from './AlertMsg';

const FormDelete: React.FC = () => {
    const initialState: type.DeleteUserForm = {
        password: '',
    };
    const [form, setForm] = useState(initialState);
    const msg = useSelector((state: RootStateOrAny) => state.modal);
    const [alertMsg, setAlertMsg] = useState<string[]>([]);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await dispatch(deleteUser(form));
            history.push('/');
        } catch (error) {
            setAlertMsg(alertMsgHelper.msgArray(await error.message));
        }
    };

    const cleanMsg = (): void => {
        setAlertMsg([]);
    };

    const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        dispatch(clearMsg());
    };

    const handleChange = ({
        target: { name, value },
    }: ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >) => {
        setForm({
            ...form,
            [name]: value,
        });
    };

    const isFormValid = () => {
        return !(form.password !== '');
    };

    return (
        <div className="form-delete" onClick={(e) => e.stopPropagation()}>
            <h2>DELETE ACC</h2>
            <a href="/" className="form-delete__close" onClick={handleClick}>
                X
            </a>
            <form className="form-delete__form" onSubmit={handleSubmit}>
                <div className="form-delete__msg">{msg}</div>
                <div className="form-delete__cta">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-delete__input"
                        required
                        value={form.password}
                        onChange={handleChange}
                        autoComplete="password"
                    />
                    <button
                        className={
                            isFormValid()
                                ? 'btn btn--disabled '
                                : 'btn btn--danger'
                        }
                        type="submit"
                        disabled={isFormValid()}
                    >
                        Delete
                    </button>
                </div>
            </form>
            {alertMsg.length > 0 && (
                <AlertMsg
                    msgs={alertMsg}
                    msgColor={'danger'}
                    cleanMsg={cleanMsg}
                    icon={'⚠'}
                    iconColor={'danger'}
                />
            )}
        </div>
    );
};

export default FormDelete;
