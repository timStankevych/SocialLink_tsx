import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {setAuthUserData} from '../../redux/authReducer';

type PropsType = {
    setAuthUserData: (id: number, login: string, email: string) => void
    isAuth: boolean
    login: string | null
}

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserData(id, login, email);
                }
            });
    }

    render() {
        return <Header
            isAuth={this.props.isAuth}
            login={this.props.login}/>;
    }
}

const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);