import React, { Component } from 'react';
import { connect } from 'react-redux';
import get from 'lodash/get';
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import DocumentService from '../../services/DocumentService';
import styles from './ShareModalStyles.scss';
class ShareModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emails: [''],
      publicChecked: false
    };

    this.documentService = new DocumentService();
  }

  addEmail = () => {
    let { emails } = this.state;
    emails.push('');
    this.setState({ emails });
  };

  removeEmail = index => {
    let { emails } = this.state;
    if (emails.length < 2) {
      return;
    }
    const updatedEmails = emails.filter((email, itemIndex) => {
      return itemIndex !== index;
    });
    this.setState({ emails: updatedEmails });
  };

  toggleCheckbox = () => {
    this.setState({ publicChecked: !this.state.publicChecked });
  };

  componentDidMount() {
    const { activeDocument } = this.props;
    if (activeDocument && activeDocument.public) {
      this.toggleCheckbox();
    }

    const sharedUsers = get(activeDocument, 'shared', []);
    if (sharedUsers.length) {
      let emails = [];
      for (let user of sharedUsers) {
        emails.push(get(user, 'email', ''));
      }
      this.setState({ emails });
    }
  }

  setEmailValues = (index, fieldValue) => {
    let { emails } = this.state;
    emails[index] = fieldValue;
    this.setState({ emails });
  };

  updateDocumentHandler = () => {
    const { emails, publicChecked } = this.state;
    const documentID = get(this.props, 'activeDocument.id', null);

    const dataPayload = {
      documentID,
      publicChecked,
      emails
    };

    this.documentService
      .updateDocument(dataPayload)
      .then(data => {
        console.log(data);
        this.props.updateDocument(data);
      })
      .catch(error => {
        const errors = get(error, 'response.data', ['Something went wrong.']);
        alert(errors);
        this.props.history.push('/account');
      });
  };

  render() {
    const { activeDocument } = this.props;
    const { emails, publicChecked } = this.state;
    return (
      <Modal
        show={this.props.show}
        size='md'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        onHide={this.props.onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>Share</Modal.Title>
        </Modal.Header>
        <Container>
          <Row className='show-grid' style={styles}>
            <Col>
              <Form>
                <Form.Group>
                  {emails.length
                    ? emails.map((email, index) => {
                        return (
                          <div className='email-wrapper' key={index}>
                            <Form.Control
                              disabled={publicChecked}
                              placeholder='Enter email'
                              value={email}
                              onChange={event =>
                                this.setEmailValues(
                                  index,
                                  event.currentTarget.value
                                )
                              }
                            />
                            {emails.length > 1 ? (
                              <button
                                type='button'
                                className='email-cross'
                                disabled={publicChecked}
                                onClick={() => this.removeEmail(index)}
                              >
                                <FontAwesomeIcon icon={faTimes} />
                              </button>
                            ) : null}
                          </div>
                        );
                      })
                    : null}
                </Form.Group>
              </Form>
              <Button
                variant='outline-secondary'
                onClick={this.addEmail}
                disabled={publicChecked}
              >
                Add Email
              </Button>
            </Col>
          </Row>
          <hr />
          <Row className='checkbox-label'>
            <Col>
              <Form>
                <Form.Group>
                  <Form.Check
                    type='checkbox'
                    label='Public'
                    defaultChecked={get(activeDocument, 'public', false)}
                    onChange={this.toggleCheckbox}
                  />
                </Form.Group>
              </Form>
              <p>
                Please note: making a page public will allow everyone with the
                page link to view the page contents.
              </p>
            </Col>
          </Row>
        </Container>
        <Modal.Footer>
          <Button variant='outline-dark' onClick={this.updateDocumentHandler}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  activeDocument: state.documentData.activeDocument
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ShareModal);
