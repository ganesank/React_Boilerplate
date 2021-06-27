import React, { useState } from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteUser } from '../../redux/user';
import { hidePopup } from '../../redux/popup';
import * as Type from '../../utils/@types/types';

import Alert from '../shared/Alert';

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
            dispatch(hidePopup());
            history.push('/');
        }
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
            {msgs.msgs.length > 0 && <Alert />}
        </div>
    );
};

export default FormDelete;
