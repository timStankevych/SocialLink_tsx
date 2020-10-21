import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {ProfileType, RootStateType} from '../../redux/redux-store';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {getStatus, getUserProfile, updateStatus} from '../../redux/profileReducer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';


type PathParamType = {
    userId: any
}
type MapStatePropsType = {
    profile: ProfileType
    status: string
}
type MapDispatchPropsType = {
    getUserProfile: (userId: any) => void
    getStatus: (userId: any) => void
    updateStatus: (userId: any) => void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId || userId === ':userId') {
            userId = 11237;
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}/>
            </div>
        );
    }
}

let mapStateToProps = (state: RootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
)(ProfileContainer);