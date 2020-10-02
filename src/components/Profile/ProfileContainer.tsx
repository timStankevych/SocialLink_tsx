import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {ProfileType, RootStateType} from '../../redux/redux-store';
import {setUserProfile} from '../../redux/profileReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom'


type PathParamType = {
    userId: string
}

type MapStatePropsType = {profile: ProfileType}
type MapDispatchPropsType = {setUserProfile: (profile: ProfileType) => void}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if (!userId){userId  ='10'}
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                    this.props.setUserProfile(response.data);
                }
            );
    }

render()   {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state: RootStateType): MapStatePropsType=> ({
    profile: state.profilePage.profile,
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);