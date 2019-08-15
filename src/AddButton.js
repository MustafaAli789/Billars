import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const AddButton = () =>{
	const button = <FontAwesomeIcon icon={faPlus} size="6x"/>;
	return(
		<Button variant="outline-dark">{button}</Button>
	);
}

export default AddButton;