import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import BillModal from './BillModal.js';

const AddButton = () =>{
	 const [modalShow, setModalShow] = React.useState(false);

	const button = <FontAwesomeIcon icon={faPlus} size="6x"/>;
	return(
		<div>
			<Button variant="outline-dark" onClick={() => setModalShow(true)}>{button}</Button>
			<BillModal show={modalShow} onHide={() => setModalShow(false)} />
		</div>
	);
}

export default AddButton;