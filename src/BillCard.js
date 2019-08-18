import React from 'react';
import Card from 'react-bootstrap/Card'
import './BillCard.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Circle from './Circle.js';

const BillCard=({bills, editBillModal, deleteBill})=>{
	const billRows = [];
	bills.forEach((bill, index)=>{
		billRows.push(
			<Row key= {index} style={{marginLeft: '0', marginRight: '0'}}>
		    	<Col className="bills d-flex align-items-center" sm="3" style={{borderRight: '0'}}>
		    		<Col sm="2"><Circle color={bill.color}></Circle></Col>
		    		<Col sm="10">{bill.paymentName}</Col>
		    	</Col>
		    	<Col className="bills d-flex align-items-center justify-content-end" sm="2" style={{borderRight: '0'}}>{bill.cost}</Col>
		    	<Col className="bills d-flex align-items-center" sm="5" style={{borderRight: '0'}}>{bill.paymentDesc}</Col>
		    	<Col className="bills d-flex align-items-center editColumn" sm="2">
		    		<h4 onClick={()=>editBillModal({title: bill.title, paymentName: bill.paymentName, paymentDesc: bill.paymentDesc, cost:  bill.cost, color: bill.color, id: bill.id})}>Edit</h4>
		    		•
	    			<h4 onClick={()=>deleteBill(bill.id)}>Delete</h4>
		    	</Col>
		    </Row>
	    );
	});
	return(
		<Card id="card" style={{ width: '100%', border: 'none' }}>
	    	<Card.Body style={{padding: '0'}}>
	    		<Row style={{marginLeft: '0', marginRight: '0'}}>
	    			<Col className="headings d-flex align-items-center" sm="3" style={{borderRight: '0'}}><h4>Name</h4></Col>
	    			<Col className="headings d-flex align-items-center justify-content-end" sm="2" style={{borderRight: '0'}}><h4>Cost (in $)</h4></Col>
	    			<Col className="headings d-flex align-items-center" sm="5" style={{borderRight: '0'}}><h4>Description</h4></Col>
	    			<Col className="headings d-flex align-items-center" sm="2"><h4>Edit/Delete</h4></Col>
	    		</Row>
	    		{billRows}
	    	</Card.Body>
	  	</Card>
	);
}

export default BillCard;