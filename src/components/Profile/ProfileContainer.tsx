import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {ProfileType, RootStateType} from '../../redux/redux-store';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {getUserProfile} from '../../redux/profileReducer';


type PathParamType = {
    userId: any
}

type MapStatePropsType = {
    profile: ProfileType
    isAuth: boolean}
type MapDispatchPropsType = { getUserProfile: (userId: any) => void }
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId || userId === ':userId') {
            userId = 11237;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>;
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                />
            </div>
        );
    }
}

let mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);