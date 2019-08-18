import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import './SortingButton.css';


const SortingDropdown = ()=>{
	return(
		<DropdownButton id="dropdown-basic-button" title="Dropdown button">
  			<Dropdown.Item href="#/action-1">Highest To Lowest Cost</Dropdown.Item>
  			<Dropdown.Item href="#/action-2">Lowest To Highest Cost</Dropdown.Item>
  			<Dropdown.Item href="#/action-3">Alphabetical</Dropdown.Item>
		</DropdownButton>
	);
}

export default SortingDropdown;