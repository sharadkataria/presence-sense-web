import React, { Component } from 'react';
import styles from './NavBarStyles.scss';
import Viewers from '../Viewers';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showViewersModal: false
    };
  }

  toggleViewersModal = () => {
    console.log('called');
    this.setState({ showViewersModal: !this.state.showViewersModal });
  };

  render() {
    const { showViewersModal } = this.state;
    return (
      <React.Fragment>
        <div style={styles} className='row navbar-wrapper'>
          <div className='col-lg-6 col-sm-12 navbar-btn-left'>
            <button type='button' className='btn btn-outline-dark'>
              Homepage
            </button>
            <button type='button' className='btn btn-outline-dark'>
              Account
            </button>
            <button type='button' className='btn btn-outline-dark'>
              Logout
            </button>
          </div>
          <div className='col-lg-6 col-sm-12 navbar-btn-right'>
            <button
              type='button'
              className='btn btn-outline-dark flow'
              onClick={this.toggleViewersModal}
            >
              Viewers
            </button>
            <button type='button' className='btn btn-success flow'>
              Share
            </button>
          </div>
        </div>

        {showViewersModal ? (
          <Viewers show={showViewersModal} onHide={this.toggleViewersModal} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default NavBar;
