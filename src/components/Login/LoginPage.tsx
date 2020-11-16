import React from 'react'
import {InjectedFormProps, Field, reduxForm} from 'redux-form';
import {Input} from '../common/FormsControl/FormsControl';
import {required} from '../../utils/validators';

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Login'} name={'login'}
                   validate={[required]}
                   component={Input}/>
        </div>
        <div>
            <Field placeholder={'Password'} name={'password'}
                   validate={[required]}
                   component={Input}/>
        </div>
        <div>
            <Field type={'checkbox'} name={'rememberMe'} component={Input}/>
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>;
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const LoginPage = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>;
};

export default LoginPage;