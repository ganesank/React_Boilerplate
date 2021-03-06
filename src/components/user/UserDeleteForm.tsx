import { FC, useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeMsg } from '../../redux/msg';
import { hidePopup } from '../../redux/popup';
import { deleteUser } from '../../redux/user';
import * as Type from '../../utils/@types';
import Alert from '../shared/Alert';
import Button from '../shared/Button';
import CTA from '../shared/CTA';
import Input from '../shared/Input';

const UserDeleteForm: FC = () => {
    const initialState: Type.DeleteUserForm = {
        password: '',
    };
    const [form, setForm] = useState(initialState);
    const msg = useSelector((state: RootStateOrAny): Type.Msg => state.msg);
    const user = useSelector((state: RootStateOrAny): Type.User => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (msg.msgs.length > 0) dispatch(removeMsg());
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const handleSubmit: Type.HandleSubmitFn<{}> = (e) => {
        e.preventDefault();
        dispatch(deleteUser(form));
        if (!user) {
            dispatch(hidePopup());
            navigate('/');
        }
    };

    const handleChange: Type.HandleChangeFn<Type.HandleChange> = ({ target: { name, value } }) => {
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
                <CTA>
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
            <Alert />
        </div>
    );
};

export default UserDeleteForm;
