import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {getAuthUserData, logout, setAuthUserData} from '../../redux/authReducer';

type PropsType = {
    setAuthUserData: (id: number, login: string, email: string) => void
    isAuth: boolean
    login: string | null
    getAuthUserData: () => void
    logout: any
}

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: RootStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

// @ts-ignore
export default connect(mapStateToProps, {setAuthUserData, getAuthUserData, logout})(HeaderContainer);