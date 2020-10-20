import React from 'react';
import {RootStateType} from '../redux/redux-store';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';


type MapStatePropsType = {
    isAuth: boolean}

let mapStateToPropsForRedirect = (state: RootStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
});


export const withAuthRedirect = (Component: any)=> {

    class RedirectComponent extends React.Component <any> {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login' />
                return <Component {...this.props}/>
        }
    }
    let ConnectAuthRedirectComponent: React.FC = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectAuthRedirectComponent
}