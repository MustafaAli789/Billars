import React from 'react';

const ColorBar = ({bills, containerWidth, showBillName})=>{
	let total = 0;
	bills.forEach((bill)=>{
		total+=Number(bill.cost);
	});

	let bars = [];

	bills.forEach((bill, index)=>{
		const pixels=(bill.cost/total)*containerWidth-1; //2 is a margin
		bars.push(<div key ={bill.id} onMouseEnter={()=>showBillName(bill.id)} style={{width: pixels, backgroundColor: bill.color, height: '10px', marginRight: '1px'}}></div>);
	});
	if(bills.length===0){
		bars.push(<div style={{width: containerWidth, backgroundColor: 'white', height: '10px'}}></div>)
	}
	return(
		<div style={{display: 'flex'}}>
			{bars}
		</div>
		
	);

}

export default ColorBar;