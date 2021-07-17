import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../../../components/shared/Input';
import CTA from '../../../components/shared/CTA';
import Button from '../../../components/shared/Button';
import Select from '../../../components/shared/Select';
import Textarea from '../../../components/shared/Textarea';
import { setMsg } from '../../../redux/msg';
import { hidePopup, showPopup } from '../../../redux/popup';
import * as Type from '../../../utils/@types/types';
import * as requestHelper from '../../../utils/helpers/requestHelper';

const PORT: number = +process.env.REACT_APP_BACKEND_PORT!;
const URL: string =
    process.env.REACT_APP_ENV! === 'production'
        ? `${process.env.REACT_APP_BACKEND_URL!}/api/apis`
        : `${process.env.REACT_APP_BACKEND_URL!}:${PORT}/api/apis`;

const ApiForm: React.FC = () => {
    const initialState: Type.ApiForm = {
        name: '',
        url: '',
        key: '',
        value: '',
        description: '',
        active: 'true',
    };
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            try {
                const response = await requestHelper.getData(`${URL}/profile`);
                if (!response.ok)
                    return dispatch(
                        setMsg({
                            msgs: [response.error.message],
                            msgColor: 'danger',
                            icon: '⚠',
                            iconColor: 'danger',
                        })
                    );

                setForm((prev) => {
                    return {
                        ...prev,
                        _id: response.data._id,
                        firstName: response.data.firstName,
                        lastName: response.data.lastName,
                        email: response.data.email,
                        telegramId: response.data.telegramId,
                        isTelegramVerified: response.data.isTelegramVerified,
                    };
                });
            } catch (error) {
                dispatch(
                    setMsg({
                        msgs: [error.message],
                        msgColor: 'danger',
                        icon: '⚠',
                        iconColor: 'danger',
                    })
                );
            }
        })();

        return () => {
            dispatch(hidePopup());
        };
    }, [dispatch, setForm]);

    const handleSubmit: Type.HandleSubmitFn<{}> = async (e) => {
        e.preventDefault();

        try {
            const response = await requestHelper.updateData(`${URL}/new`, form);

            if (!response.ok) {
                const errors = Object.keys(response.error).map((key) => {
                    return response.error[key];
                });

                return dispatch(
                    setMsg({
                        msgs: errors,
                        msgColor: 'danger',
                        icon: '⚠',
                        iconColor: 'danger',
                    })
                );
            }

            if (response.data && response.data.verifyToken) console.log(`${URL}/email/${response.data.verifyToken}`);

            setForm((prev) => {
                return {
                    ...prev,
                    newPassword: '',
                    confirmNewPassword: '',
                };
            });

            dispatch(
                showPopup({
                    title: 'Profile Updated',
                    message: 'Your profile has been updated successfully',
                    children: false,
                })
            );
        } catch (error) {
            dispatch(
                setMsg({
                    msgs: [error.message],
                    msgColor: 'danger',
                    icon: '⚠',
                    iconColor: 'danger',
                })
            );
        }
    };

    const handleDelete: Type.HandleClickFn = (e) => {
        e.preventDefault();
        dispatch(
            showPopup({
                visible: true,
                title: 'Delete Acc',
                message: 'Are you sure you want to delete your account?',
                children: true,
            })
        );
    };

    const handleChange: Type.HandleChangeFn = ({ target: { name, value } }) => {
        setForm({
            ...form,
            [name]: value,
        });
        console.log(form);
    };

    const isFormValid: Type.IsFormValidFn = () => {
        return !(
            form.name.trim() !== '' &&
            form.url.trim() !== '' &&
            form.key.trim() !== '' &&
            form.value.trim() !== ''
        );
    };

    const options = [
        { key: 'true', value: 'Active' },
        { key: 'false', value: 'Desactive' },
    ];

    return (
        <div className="api-form">
            <form onSubmit={handleSubmit}>
                <Input
                    placeholder="Name"
                    label="Name"
                    name="name"
                    value={form.name}
                    handle="api-name"
                    onChange={handleChange}
                />
                <Input
                    placeholder="URL"
                    label="URL"
                    name="url"
                    value={form.url}
                    handle="api-url"
                    onChange={handleChange}
                />
                <Input
                    placeholder="Secret Key"
                    label="Secret Key"
                    name="key"
                    value={form.key}
                    handle="api-key"
                    onChange={handleChange}
                    type="password"
                    autoComplete="new-password"
                />
                <Input
                    placeholder="Secret Value"
                    label="Secret Value"
                    name="value"
                    value={form.value}
                    handle="api-value"
                    onChange={handleChange}
                    type="password"
                    autoComplete="new-password"
                />
                <Textarea
                    placeholder="Description"
                    label="Description"
                    name="description"
                    handle="api-form__description"
                    value={form.description}
                    onChange={handleChange}
                />
                <Select
                    name="active"
                    value={form.active}
                    label="Active"
                    handle="api-active"
                    options={options}
                    onChange={handleChange}
                />
                <CTA>
                    <Button value="Create" type="submit" disabled={isFormValid()} />
                </CTA>
            </form>
        </div>
    );
};

export default ApiForm;
