import React from 'react';
import './TopMessage.css';

const TopMessage = ({bills, startingMoney})=>{
	let remainingMoney = startingMoney;
	let message = '';
	bills.forEach((bill)=>{
		remainingMoney-=Number(bill.cost);
	});
	remainingMoney = Math.round((remainingMoney + 0.00001) * 100) / 100;
	if(remainingMoney>(startingMoney*0.1)){
		message=<h1>You have <span id="safe" className="messageSpan">${remainingMoney}</span> safe to spend</h1>
	} else if(remainingMoney>0){
		message=<h1>You have <span id="risk" className="messageSpan">${remainingMoney}</span> safe to spend. Make sure not to spend too much more.</h1>;
	} else{
		message = <h1>You are down by <span id="unsafe" className="messageSpan">${remainingMoney}</span>. Better make some changes.</h1>;
	}
	return(
		<div>
			{message}
		</div>
	);
}

export default TopMessage;