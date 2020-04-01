import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default ChildComponent => {
  class LoggedIn extends React.Component {
    render() {
      let isLoggedIn = this.props.user.userDetails;
      if (isLoggedIn) {
        return <Redirect to='/account' />;
      }

      return <ChildComponent />;
    }
  }

  const mapStateToProps = state => ({
    user: state.userData
  });

  return connect(mapStateToProps, {})(LoggedIn);
};
