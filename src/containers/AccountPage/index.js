import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';
import NavBar from '../../components/NavBar';
import styles from './AccountPageStyles.scss';

class AccountPage extends Component {
  constructor(props) {
    super(props);
  }

  handleNavigation = identifier => {
    this.props.history.push(`/signup?id=${identifier}`);
  };

  render() {
    return (
      <div className='container' style={styles}>
        <NavBar />
        <div className='row column-wrapper'>
          <div className='col-lg-6 col-md-6 col-sm-12 column-item'>
            <h5>Create a new document</h5>
            <Button variant='outline-dark'>Create</Button>
            <p>
              Documents are created private by default. To make it public, click
              on the share button inside the document.
            </p>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 column-item'>
            <h5>Your documents</h5>
            <Table bordered hover className='documents-table'>
              <thead>
                <tr>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  style={{ cursor: 'pointer' }}
                  onClick={() => this.handleNavigation('123')}
                >
                  <td>Mark</td>
                </tr>
                <tr
                  style={{ cursor: 'pointer' }}
                  onClick={() => this.handleNavigation('13')}
                >
                  <td>Jacob</td>
                </tr>
                <tr
                  style={{ cursor: 'pointer' }}
                  onClick={() => this.handleNavigation('123')}
                >
                  <td>Mark</td>
                </tr>
                <tr
                  style={{ cursor: 'pointer' }}
                  onClick={() => this.handleNavigation('13')}
                >
                  <td>Jacob</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountPage;
