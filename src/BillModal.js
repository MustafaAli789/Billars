import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './BillModal.css';
import { SliderPicker } from 'react-color';
import { useState } from 'react';

class BillModal extends React.Component{

	constructor(props){
		super(props);
		this.state={
			color: '#fff',
		}
	}

	setColor = (newColor)=>{
		this.setState({color: newColor.hex})
	}

	render(){
		return(
			<Modal
		      {...this.props}
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
		        <textarea id="story" rows="3" cols="33" placeholder="Hey, I just met you...">
				</textarea>
		        <h4>Cost (in $)</h4>
				<input type="text" placeholder="Color"></input>
		        <h4>Color</h4>
		        <SliderPicker
		        	color={this.state.color}
		        	onChangeComplete={this.setColor}>
		        </SliderPicker>
		      </Modal.Body>
		      <Modal.Footer>
		      	<Button variant="outline-dark" onClick={this.props.onHide}>Close</Button>
		        <Button variant="outline-dark" onClick={()=>this.props.submit(this.state.color)}>Add</Button>
		      </Modal.Footer>
		    </Modal>
		);
	}

	
}

export default BillModal;
