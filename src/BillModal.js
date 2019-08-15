import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './BillModal.css';


const billModal =(props)=>{
	return(
		<Modal
	      {...props}
	      size="sm"
	      aria-labelledby="contained-modal-title-vcenter"
	      centered
	    >
	      <Modal.Header closeButton>
	        <Modal.Title id="contained-modal-title-vcenter">
	          Add a new bill
	        </Modal.Title>
	      </Modal.Header>
	      <Modal.Body>
	        <h4>Payment name</h4>
	        <input type="text" placeholder="Rent"></input>
	        <h4>Payment description</h4>
	       	<input type="text" placeholder="Home, home on the range"></input>
	        <h4>Cost (in $)</h4>
			<input type="text" placeholder="Color"></input>
	        <h4>Color</h4>
	      </Modal.Body>
	      <Modal.Footer>
	        <Button onClick={props.onHide}>Close</Button>
	      </Modal.Footer>
	    </Modal>
	);
}

export default billModal;
