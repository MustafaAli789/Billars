import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import './SortingButton.css';


const SortingDropdown = ({bills, sortBills})=>{
	return(
		<DropdownButton id="dropdown-basic-button" title="Dropdown button">
  			<Dropdown.Item onClick={()=>sortBills("HighToLow")}>Highest To Lowest Cost</Dropdown.Item>
  			<Dropdown.Item onClick={()=>sortBills("LowToHigh")}>Lowest To Highest Cost</Dropdown.Item>
  			<Dropdown.Item onClick={()=>sortBills("Alpha")}>Alphabetical</Dropdown.Item>
		</DropdownButton>
	);
}

export default SortingDropdown;