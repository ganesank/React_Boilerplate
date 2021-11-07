import { FC, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { setMsg } from '../../redux/msg';
import { hidePopup } from '../../redux/popup';
import * as Type from '../../utils/@types';
import * as Request from '../../utils/helpers/functions/request';
import { getEnvURL } from '../../utils/helpers/functions/shared';
import Alert from '../shared/Alert';
import Button from '../shared/Button';
import CTA from '../shared/CTA';
import Input from '../shared/Input';
import Select from '../shared/Select';
import Textarea from '../shared/Textarea';

const URL: string = `${getEnvURL('REACT_APP_BACKEND_URL')}/api/api`;

const ApiForm: FC<Type.ApiFormC> = ({ setApis, data }) => {
    const initialState: Type.ApiForm = data
        ? {
              _id: data.api._id,
              type: data.api.type,
              name: data.api.name,
              url: data.api.url,
              key: data.api.key,
              value: data.api.value,
              description: data.api.description,
              active: data.api.active.toString(),
          }
        : {
              _id: '',
              type: 'custom',
              name: '',
              url: '',
              key: '',
              value: '',
              description: '',
              active: 'true',
          };
    const msg = useSelector((state: RootStateOrAny): Type.Msg => state.msg);
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();

    const handleSubmit: Type.HandleSubmitFn<{}> = async (e) => {
        e.preventDefault();

        try {
            let response: Type.Response<Type.ApiForm>;

            if (form._id === '') {
                response = await Request.postData(`${URL}/new`, form);
            } else {
                response = await Request.updateData(`${URL}/${form._id}`, form);
            }

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

            if (form._id === '') {
                const updatedForm: Type.ApiForm = {
                    ...form,
                    _id: response.data._id,
                };
                setApis((prev: Type.ApiForm[]) => {
                    return [...prev, updatedForm];
                });

                setForm({
                    type: 'custom',
                    name: '',
                    url: '',
                    key: '',
                    value: '',
                    description: '',
                    active: 'true',
                });
            } else {
                setApis((prev: Type.ApiForm[]) => {
                    return [...prev.slice(0, data!.idx), form, ...prev.slice(data!.idx + 1, prev.length)];
                });
            }

            dispatch(hidePopup());
        } catch (error: any) {
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

    const handleChange: Type.HandleChangeFn<Type.HandleChange> = ({ target: { name, value } }) => {
        setForm({
            ...form,
            [name]: value,
        });
    };

    const isFormValid: Type.IsFormValidFn = () => {
        return !(
            form.name.trim() !== '' &&
            form.url.trim() !== '' &&
            form.key.trim() !== '' &&
            form.value.trim() !== ''
        );
    };

    const options: Type.Obj[] = [
        { key: 'true', value: 'Enabled' },
        { key: 'false', value: 'Disabled' },
    ];

    const typeOptions: Type.Obj[] = [
        { key: 'custom', value: 'Custom' },
        { key: 'discord', value: 'Discord' },
        { key: 'telegram', value: 'Telegram' },
        { key: 'twitter', value: 'Twitter' },
    ];

    return (
        <div className="api-form">
            <form onSubmit={handleSubmit}>
                <Select
                    name="type"
                    value={form.type}
                    label="Type"
                    handle="api-type"
                    options={typeOptions}
                    onChange={handleChange}
                />
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
                    autoComplete="new-password"
                />
                <Input
                    placeholder="Secret Value"
                    label="Secret Value"
                    name="value"
                    value={form.value}
                    handle="api-value"
                    onChange={handleChange}
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
                    label="Status"
                    handle="api-active"
                    options={options}
                    onChange={handleChange}
                />
                <CTA>
                    <Button value={form._id ? 'Update' : 'Create'} type="submit" disabled={isFormValid()} />
                </CTA>
            </form>
            {msg.msgs && msg.msgs.length > 0 && <Alert />}
        </div>
    );
};

export default ApiForm;
