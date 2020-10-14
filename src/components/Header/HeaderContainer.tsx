import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {RootStateType} from '../../redux/redux-store';
import {getAuthUserData, setAuthUserData} from '../../redux/authReducer';

type PropsType = {
    setAuthUserData: (id: number, login: string, email: string) => void
    isAuth: boolean
    login: string | null
    getAuthUserData: () => void
}

class HeaderContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getAuthUserData();
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

export default connect(mapStateToProps, {setAuthUserData, getAuthUserData})(HeaderContainer);