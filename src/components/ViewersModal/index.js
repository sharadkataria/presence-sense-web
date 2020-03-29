import React, { Component } from 'react';
import { Modal, Button, Container, Row, Col, Table } from 'react-bootstrap';

class ViewersModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        size='md'
        aria-labelledby='contained-modal-title-vcenter'
        centered
        onHide={this.props.onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>Viewers</Modal.Title>
        </Modal.Header>
        <Container>
          <Row className='show-grid'>
            <Col>
              <Table striped borderless hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Timestamp</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>{new Date().toDateString()}</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>{new Date().toDateString()}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
        <Modal.Footer>
          <Button variant='outline-dark' onClick={this.props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ViewersModal;
