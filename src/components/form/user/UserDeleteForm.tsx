import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { removeMsg } from '../../../redux/msg';
import { hidePopup } from '../../../redux/popup';
import { deleteUser } from '../../../redux/user';
import * as Type from '../../../utils/@types/types';
import Alert from '../../shared/Alert';
import Button from '../../shared/Button';
import CTA from '../../shared/CTA';
import Input from '../../shared/Input';

const UserDeleteForm: React.FC = () => {
    const initialState: Type.DeleteUserForm = {
        password: '',
    };
    const [form, setForm] = useState(initialState);
    const msg = useSelector((state: RootStateOrAny) => state.msg);
    const user = useSelector((state: RootStateOrAny) => state.user);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        return () => {
            dispatch(removeMsg());
        };
    }, [dispatch]);

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
        <div className="user-delete-form" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmit}>
                <CTA justify="right">
                    <Input
                        placeholder="Password"
                        name="password"
                        value={form.password}
                        type="password"
                        autoComplete="password"
                        onChange={handleChange}
                        required={true}
                    />
                    <Button value="Delete" btnColor="danger" type="submit" disabled={isFormValid()} />
                </CTA>
            </form>
            {msg.msgs.length > 0 && <Alert />}
        </div>
    );
};

export default UserDeleteForm;
