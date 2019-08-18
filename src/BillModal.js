import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './BillModal.css';
import { SliderPicker } from 'react-color';

class BillModal extends React.Component{

	constructor(props){
		super(props);
		this.state={
			title: props.data.title,
			paymentName: props.data.paymentName,
			paymentDesc: props.data.paymentDesc,
			cost: props.data.cost,
			color: props.data.color,
			id: props.data.id,
		}
	}


	setColor = (newColor)=>{
		this.setState({color: newColor.hex})
	}

	handleInputChanged=(event)=>{
		const inputType = event.target.getAttribute('category');
		if(inputType==="paymentName"){
			this.setState({paymentName: event.target.value});
		} else if(inputType==="paymentDesc"){
			this.setState({paymentDesc: event.target.value});
		} else if(inputType==="cost"){
			this.setState({cost: event.target.value});
		}
		
	}

	render(){
		const {title, paymentName, paymentDesc, cost, color} = this.state;
		const {setModalVisible, submit} = this.props;
		return(
			<Modal
		      {...this.props}
		      onHide={()=>setModalVisible(false)}
		      size="sm"
		      aria-labelledby="contained-modal-title-vcenter"
		      centered
		    >
		      <Modal.Header closeButton>
		        <Modal.Title id="contained-modal-title-vcenter">
		          {title + " bill"}
		        </Modal.Title>
		      </Modal.Header>
		      <Modal.Body>
		        <h4>Payment name</h4>
		        <input type="text" category="paymentName" placeholder="Rent" value={paymentName} onChange={this.handleInputChanged}></input>
		        <h4>Payment description</h4>
		        <textarea id="story" category="paymentDesc" rows="3" cols="33" placeholder="Hey, I just met you..." value={paymentDesc} onChange={this.handleInputChanged}></textarea>
		        <h4>Cost (in $)</h4>
				<input type="text" category="cost" placeholder="Cost" value={cost} onChange={this.handleInputChanged}></input>
		        <h4>Color</h4>
		        <SliderPicker
		        	color={color}
		        	onChangeComplete={this.setColor}>
		        </SliderPicker>
		      </Modal.Body>
		      <Modal.Footer>
		      	<Button variant="outline-dark" onClick={()=>setModalVisible(false)}>Close</Button>
		        <Button variant="outline-dark" onClick={()=>
		        	{
		        		if(paymentName.length>0 && paymentDesc.length>0 && cost.length>0){
		        			if(!isNaN(cost)){
		        				return submit(this.state);
		        			} else{
		        				alert("Cost must only be a number");
		        			}
		        		} else{
		        			alert("All fields must be filled.");
		        		}
		        	}
		        }>{title}
		        </Button>
		      </Modal.Footer>
		    </Modal>
		);
	}

	
}

export default BillModal;
