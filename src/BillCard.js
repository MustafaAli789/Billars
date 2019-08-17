import React, {Component} from 'react';
import Card from 'react-bootstrap/Card'
import './BillCard.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Circle from './Circle.js';

const BillCard=({bills})=>{
	const billRows = [];
	bills.forEach((bill, index)=>{
		billRows.push(
			<Row key= {index} style={{marginLeft: '0', marginRight: '0'}}>
		    	<Col className="bills d-flex align-items-center" sm="3" style={{borderRight: '0'}}><Circle color={bill.color}></Circle>{bill.paymentName}</Col>
		    	<Col className="bills d-flex align-items-center justify-content-end" sm="2" style={{borderRight: '0'}}>{bill.cost}</Col>
		    	<Col className="bills d-flex align-items-center" sm="5" style={{borderRight: '0'}}>{bill.paymentDesc}</Col>
		    	<Col className="bills d-flex align-items-center" sm="2">{index}</Col>
		    </Row>
	    );
	});
	return(
		<Card id="card" style={{ width: '100%', border: 'none' }}>
	    	<Card.Body style={{padding: '0'}}>
	    		<Row style={{marginLeft: '0', marginRight: '0'}}>
	    			<Col className="headings d-flex align-items-center" sm="3" style={{borderRight: '0'}}><h4>Name</h4></Col>
	    			<Col className="headings d-flex align-items-center justify-content-end" sm="2" style={{borderRight: '0'}}><h4>Cost</h4></Col>
	    			<Col className="headings d-flex align-items-center" sm="5" style={{borderRight: '0'}}><h4>Description</h4></Col>
	    			<Col className="headings d-flex align-items-center" sm="2"><h4>Edit/Delete</h4></Col>
	    		</Row>
	    		{billRows}
	    	</Card.Body>
	  	</Card>
	);
}

export default BillCard;