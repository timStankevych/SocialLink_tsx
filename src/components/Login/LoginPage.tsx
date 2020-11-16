import React from 'react';
import {InjectedFormProps, Field, reduxForm} from 'redux-form';
import {Input} from '../common/FormsControl/FormsControl';
import {required} from '../../utils/validators';
import {login, logout} from '../../redux/authReducer';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import { Redirect } from 'react-router-dom';

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Email'} name={'email'}
                   validate={[required]}
                   component={Input}/>
        </div>
        <div>
            <Field placeholder={'Password'} name={'password'} type={'password'}
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

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm);

const LoginPage = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>;
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>;
};

const mapStateToProps = (state: RootStateType) => ({
     isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login, logout})(LoginPage);