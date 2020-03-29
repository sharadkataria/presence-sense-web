import React, { Component } from 'react';
import { Modal, Button, Container, Row, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './ShareModalStyles.scss';
class ShareModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emails: [''],
      publicChecked: false
    };
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

  render() {
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
                            />
                            {emails.length > 1 ? (
                              <button
                                type='button'
                                className='email-cross'
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
          <Button variant='outline-dark' onClick={this.props.onHide}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ShareModal;
