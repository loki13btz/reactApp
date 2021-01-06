import * as axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
// import s from './Profile.module.css';
import { setUsersProfile } from './../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../Api/api';




class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        profileAPI.getProfile(userId).then(data => {
            this.props.setUsersProfile(data);

        })
    }
    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} />
            </div >);
    };
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile

});

let WithRoutertComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUsersProfile })(WithRoutertComponent);

