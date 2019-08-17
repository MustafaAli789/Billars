import React from 'react';

const Circle = ({color})=>{
	console.log(color);
	return(
		<div style={{width: '10px', height: '10px', backgroundColor:color, borderRadius: '50%', marginRight: '5px'}}></div>
	);
}

export default Circle;