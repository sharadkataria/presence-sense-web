import React, { Component } from 'react';
import NavBar from '../../components/NavBar';
import styles from './DocumentPageStyles.scss';
import socketIOClient from 'socket.io-client';
class DocumentPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      documentID: this.props.match.params.docIdentifier
    };
    this.socket = null;
  }

  componentDidMount() {
    this.initialiseSocket();
  }

  initialiseSocket = () => {
    const { documentID } = this.state;
    this.socket = socketIOClient('http://localhost:3003/');

    this.socket.on(documentID, payload => {
      console.log(payload);
    });

    this.socket.emit('document-connect', { documentID });
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
    const { documentID } = this.state;
    this.socket.emit('document-disconnect', { documentID });
  }
}

export default DocumentPage;
