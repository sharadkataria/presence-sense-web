import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default ChildComponent => {
  class RequireAuth extends React.Component {
    render() {
      let isLoggedIn = this.props.user.userDetails;
      if (!isLoggedIn) {
        return <Redirect to='/login' />;
      }

      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    user: state.userData
  });

  return connect(mapStateToProps, {})(RequireAuth);
};
