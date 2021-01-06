import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { headerAPI } from '../../Api/api';
import { setAuthUserData } from '../../redux/authReducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        headerAPI.getHeader().then(data => {
            if (data.resultCode === 0) {
                let { Id, email, login } = data.data;
                this.props.setAuthUserData(Id, email, login)
            }
        })
    }
    render() {
        return (
            <Header {...this.props} />
        )
    }
};


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);