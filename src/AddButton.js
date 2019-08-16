import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import BillModal from './BillModal.js';
import { useState } from 'react';

const AddButton = ({submit}) =>{
	const [modalShow, setModalShow] = useState(false);

	const button = <FontAwesomeIcon icon={faPlus} size="6x"/>;
	return(
		<div>
			<Button variant="outline-dark" onClick={() => setModalShow(true)}>{button}</Button>
			<BillModal show={modalShow} onHide={() => setModalShow(false)} submit={submit} />
		</div>
	);
}

export default AddButton;