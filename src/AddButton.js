import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddButton = ({createNewBill}) =>{
	const buttonIcon = <FontAwesomeIcon icon={faPlus} size="6x"/>;
	return(
		<div>
			<Button variant="outline-dark" onClick={() => createNewBill(["Add", "", "", "", "#fff"])}>{buttonIcon}</Button>
		</div>
	);
}

export default AddButton;