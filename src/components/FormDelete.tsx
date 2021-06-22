import React, { useState } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteUser } from '../redux/user';
import { hideModal } from '../redux/modal';
import * as Type from '../utils/@types/types';

import AlertMsg from './AlertMsg';

const FormDelete: React.FC = () => {
    const initialState: Type.DeleteUserForm = {
        password: '',
    };
    const [form, setForm] = useState(initialState);
    const msgs = useSelector((state: RootStateOrAny) => state.msgs);
    const user = useSelector((state: RootStateOrAny) => state.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit: Type.HandleSubmitFn<{}> = (e) => {
        e.preventDefault();
        dispatch(deleteUser(form));
        if (!user) {
            history.push('/');
            dispatch(hideModal());
        }
    };

    const handleClose: Type.HandleClickFn = (e) => {
        e.preventDefault();
        dispatch(hideModal());
    };

    const handleChange: Type.HandleChangeFn = ({ target: { name, value } }) => {
        setForm({
            ...form,
            [name]: value,
        });
    };

    const isFormValid: Type.IsFormValidFn = () => {
        return !(form.password !== '');
    };

    return (
        <div className="form-delete" onClick={(e) => e.stopPropagation()}>
            <h2>DELETE ACC</h2>
            <a href="/" className="form-delete__close" onClick={handleClose}>
                X
            </a>
            <form className="form-delete__form" onSubmit={handleSubmit}>
                <div className="form-delete__msg">Are you sure you want to delete your account?</div>
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
                        className={isFormValid() ? 'btn btn--disabled ' : 'btn btn--danger'}
                        type="submit"
                        disabled={isFormValid()}
                    >
                        Delete
                    </button>
                </div>
            </form>
            {msgs.msgs.length > 0 && <AlertMsg />}
        </div>
    );
};

export default FormDelete;
