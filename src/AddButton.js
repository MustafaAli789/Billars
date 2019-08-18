import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddButton = ({createNewBill}) =>{
	const buttonIcon = <FontAwesomeIcon icon={faPlus} style={{fontSize:'6vw'}}/>;
	return(
		<div>
			<Button variant="outline-dark" onClick={() => createNewBill({title: "Add", paymentName:"", paymentDesc: "", cost:"", color: "#000", id: null})}>{buttonIcon}</Button>
		</div>
	);
}

export default AddButton;