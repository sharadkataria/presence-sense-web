import React, { Component } from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';
import RequireAuth from '../../hoc/RequireAuth';
import { Button, Table, Form } from 'react-bootstrap';
import NavBar from '../../components/NavBar';
import DocumentService from '../../services/DocumentService';
import { getDocuments, addDocument } from '../../actions/DocumentActions';
import styles from './AccountPageStyles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

class AccountPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formData: {
        name: ''
      }
    };

    this.documentService = new DocumentService();
  }

  componentDidMount() {
    this.getDocuments();
  }

  handleNavigation = identifier => {
    this.props.history.push(`/document/${identifier}`);
  };

  setStateValues = (fieldName, fieldValue) => {
    const formData = this.state.formData;
    formData[fieldName] = fieldValue;
    this.setState({ formData });
  };

  getDocuments = () => {
    this.documentService
      .getDocuments()
      .then(data => {
        this.props.getDocuments(data);
      })
      .catch(error => {
        const errors = get(error, 'response.data', ['Something went wrong.']);
        alert(errors);
      });
  };

  addDocumentHandler = () => {
    const { formData } = this.state;
    if (!formData.name) {
      return alert('Document name is required.');
    }

    this.documentService
      .addDocument(formData)
      .then(data => {
        const formData = this.state.formData;
        formData.name = '';
        this.setState({ formData });
        this.props.addDocument(data);
      })
      .catch(error => {
        const errors = get(error, 'response.data', ['Something went wrong.']);
        alert(errors);
      });
  };

  render() {
    const { documents } = this.props;
    const { formData } = this.state;
    return (
      <div className='container' style={styles}>
        <NavBar />
        <div className='row column-wrapper'>
          <div className='col-lg-6 col-md-6 col-sm-12 column-item'>
            <h4>Create a new document</h4>
            <Form>
              <Form.Group>
                <Form.Control
                  type='text'
                  placeholder='Enter a name'
                  value={formData.name}
                  onChange={event =>
                    this.setStateValues('name', event.currentTarget.value)
                  }
                />
              </Form.Group>
            </Form>

            <Button variant='outline-dark' onClick={this.addDocumentHandler}>
              Create
            </Button>
            <p>
              Documents are created private by default. To make it public, click
              on the share button inside the document.
            </p>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 column-item'>
            <h4>Your documents (Scrollable) </h4>
            {documents && documents.length ? (
              <Table bordered hover className='documents-table'>
                <thead>
                  <tr>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  {documents.map((doc, index) => {
                    return (
                      <tr
                        key={index}
                        style={{ cursor: 'pointer' }}
                        onClick={() => this.handleNavigation(doc.id)}
                      >
                        <td>
                          {doc.name}
                          {!doc.owner ? <FontAwesomeIcon icon={faUsers} /> : ''}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  documents: state.documentData.documents
});

const mapDispatchToProps = {
  getDocuments,
  addDocument
};

export default RequireAuth(
  connect(mapStateToProps, mapDispatchToProps)(AccountPage)
);
