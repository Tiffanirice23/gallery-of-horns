import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './HornedBeast.css'


class SelectBeast extends React.Component {
 
render() {
  return (
    <>
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.hornedBeast.title} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {this.props.hornedBeast.description} 
        {this.props.hornedBeast.horns}
        <img
        src={this.props.hornedBeast.imageURL} 
        alt={this.props.hornedBeast.alt}
        title={this.props.title} 
        height= {200}
        width= {200}
        onClick={this.handleShowModal}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
  }
}

export default SelectBeast;
