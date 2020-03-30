import React, { Component } from 'react';
import styles from './NavBarStyles.scss';
import ViewersModal from '../ViewersModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faUsers } from '@fortawesome/free-solid-svg-icons';
import Viewers from '../Viewers';
import ShareModal from '../ShareModal';
import { Link } from 'react-router-dom';
class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showViewersModal: false,
      showShareModal: false
    };
  }

  toggleViewersModal = () => {
    this.setState({ showViewersModal: !this.state.showViewersModal });
  };

  toggleShareModal = () => {
    this.setState({ showShareModal: !this.state.showShareModal });
  };

  render() {
    const { showViewersSection } = this.props;
    const { showViewersModal, showShareModal } = this.state;
    return (
      <React.Fragment>
        <div style={styles} className='row navbar-wrapper'>
          <div className='col-lg-6 col-sm-12 navbar-btn-left'>
            <button type='button' className='btn btn-outline-dark'>
              Homepage
            </button>
            <Link
              to='/account'
              type='button'
              className='d-flex align-items-center justify-content-center btn btn-outline-dark'
            >
              Account
            </Link>
            <button type='button' className='btn btn-outline-dark'>
              Logout
            </button>
          </div>
          {showViewersSection ? (
            <div className='col-lg-6 col-sm-12 navbar-btn-right'>
              <Viewers />
              <button
                type='button'
                title='Viewers'
                className='btn btn-outline-dark flow'
                onClick={this.toggleViewersModal}
              >
                <FontAwesomeIcon icon={faUsers} />
              </button>

              <button
                type='button'
                className='btn btn-success flow'
                onClick={this.toggleShareModal}
              >
                <FontAwesomeIcon icon={faShareAlt} />
                Share
              </button>
            </div>
          ) : null}
        </div>

        {showViewersModal ? (
          <ViewersModal
            show={showViewersModal}
            onHide={this.toggleViewersModal}
          />
        ) : null}

        {showShareModal ? (
          <ShareModal show={showShareModal} onHide={this.toggleShareModal} />
        ) : null}
      </React.Fragment>
    );
  }
}

export default NavBar;
