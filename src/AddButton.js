import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './AddButton.css';

const AddButton = ({createNewBill}) =>{
	const buttonIcon = <FontAwesomeIcon id="plusIcon" icon={faPlus}/>;
	return(
		<div>
			<Button variant="outline-dark" onClick={() => createNewBill({title: "Add", paymentName:"", paymentDesc: "", cost:"", color: "#000", id: null})}>{buttonIcon}</Button>
		</div>
	);
}

export default AddButton;