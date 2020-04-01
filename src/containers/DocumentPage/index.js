import React, { Component } from 'react';
import get from 'lodash/get';
import { connect } from 'react-redux';
import NavBar from '../../components/NavBar';
import styles from './DocumentPageStyles.scss';
import socketIOClient from 'socket.io-client';
import DocumentService from '../../services/DocumentService';
import RequireAuth from '../../hoc/RequireAuth';
import { updateViewers, removeViewers } from '../../actions/DocumentActions';
class DocumentPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      documentID: this.props.match.params.docIdentifier,
      document: null
    };
    this.socket = null;
    this.documentService = new DocumentService();
  }

  componentDidMount() {
    this.getDocumentData();
    // this.initialiseSocket();
  }

  getDocumentData = () => {
    const { documentID } = this.state;

    if (!documentID) {
      return this.props.history.push('/account');
    }

    this.documentService
      .getDocumentByID(documentID)
      .then(data => {
        this.setState({ document: data }, () => {
          this.initialiseSocket();
        });
      })
      .catch(error => {
        const errors = get(error, 'response.data', ['Something went wrong.']);
        alert(errors);
      });
  };

  initialiseSocket = () => {
    const { documentID } = this.state;
    const { userDetails } = this.props;

    this.socket = socketIOClient('http://localhost:3003/');

    this.socket.on(documentID, payload => {
      this.props.updateViewers(payload);
    });

    this.socket.emit('document-connect', {
      documentID,
      userID: userDetails.id
    });
  };

  render() {
    return (
      <div className='container' style={styles}>
        <NavBar showViewersSection={true} />

        <div className='row'>
          <div className='col-lg-6 col-md-8 col-sm-12 description'>
            <p>
              This is just a demo document to simulate the 'social presence'
              feature like Google. When multiple people are viewing the same
              document in an active connection, they will see a live update in
              the avatar view. Also you can access all the people that have
              accessed this document along with the timestamps by clicking on
              the 'People' button next to the avatars.
            </p>

            <p>
              Click on the 'Share' button to give people access to this
              document. If this document is private, the invited person should
              be a user of this platform, but if it is public, anyone with the
              document link can access it.
            </p>
          </div>
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    this.props.removeViewers();
    if (this.socket) this.socket.disconnect();
  }
}

const mapStateToProps = state => ({
  userDetails: state.userData.userDetails
});

const mapDispatchToProps = {
  updateViewers,
  removeViewers
};

export default RequireAuth(
  connect(mapStateToProps, mapDispatchToProps)(DocumentPage)
);
