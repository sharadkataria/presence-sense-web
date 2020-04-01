import React, { Component } from 'react';
import { Modal, Button, Container, Row, Col, Table } from 'react-bootstrap';
import { connect } from 'react-redux';

class ViewersModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { viewers } = this.props;
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
                  {viewers && viewers.length
                    ? viewers.map((viewer, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{viewer.name}</td>
                            <td>{viewer.timestamp}</td>
                          </tr>
                        );
                      })
                    : null}
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

const mapStateToProps = state => ({
  viewers: state.documentData.viewers
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ViewersModal);
