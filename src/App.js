import React, {Component} from 'react';
import './App.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddButton from './AddButton.js';
import BillModal from './BillModal.js';
import BillCard from './BillCard.js';
import TopMessage from './TopMessage.js';
import ColorBar from './ColorBar.js';


class App extends Component{

  constructor(){
    super()
    this.state={
      bills: [],
      renderModal: false,
      modalData: {},
      containerWidth: 0,
      colorBarHoverText: "Placeholder",
      income: 1000,
    }
  }

  componentDidMount() {
    var self = this;
    self.setState({containerWidth: document.getElementById("colorBarContainer").offsetWidth});
    window.addEventListener("resize", function(){
      self.setState({containerWidth: document.getElementById("colorBarContainer").offsetWidth});
    });
  }

  //deleted the bill with the specified id
  deleteBill = (billId)=>{
    var newStateArray = this.state.bills;
    newStateArray.splice(billId, 1);
    this.setState({bills: newStateArray});
  }

  //upon clicking add or edit in bill modal
  addEditBill=(billInfo)=>{
    var newStateArray;
    if(billInfo.title==="Add"){
      billInfo.title="Edit";
      newStateArray = this.state.bills.slice();
      newStateArray.push(billInfo);
    } else{ //bill is being edited
      newStateArray = this.state.bills.slice();
      newStateArray[Number(billInfo.id)]=billInfo;
    }

    this.setState({bills: newStateArray});  
    this.setModalVisible(false);
      
  }

  //used to createa new bill modal with specified data (after clicking plus sign button or edit button)
  createBillModal=(data)=>{
    this.setModalVisible(true);

    //the bill is not being edited
    if(data.id===null){
      data.id = this.state.bills.length; //this will be the id of the bill
    }
    this.setModalData(data);
  }

  //controls whether to show the modal or not
  setModalVisible = (visible) => {
    if(visible){
      this.setState({renderModal: true});
    } else{
      this.setState({renderModal: false});
    }
  }

  //will set the modal data
  setModalData = (data) =>{
    this.setState({modalData: data});
  }

  showBillName = (paymentName, show)=>{
    this.setState({colorBarHoverText: paymentName});
    if(show)
      document.getElementById("colorBarHoverText").style.color="black";
    else
      document.getElementById("colorBarHoverText").style.color="white";
  }

  changeIncome=()=>{
    var newIncome = prompt("Enter your income per month:", "1000");
    if (newIncome != null && !isNaN(newIncome)) {
      this.setState({income: Number(newIncome)});
    }
  }

  render(){
    const {bills, renderModal, modalData, containerWidth, colorBarHoverText, income} = this.state;
    const billModal = renderModal ? <BillModal show={true} data={modalData} setModalVisible={this.setModalVisible} submit={this.addEditBill}/> : null;
    return (
      <div id="container" className="container" style={{marginTop: '1rem'}}>
        {billModal}
        <Row noGutters="true">
          <Col xs="2" style={{marginRight: '1rem', display: 'flex', alignItems: 'center'}}><AddButton createNewBill={this.createBillModal}></AddButton></Col>
          <Col xs="9" style={{display: 'flex', alignItems: 'center'}}><TopMessage bills={bills} startingMoney={income}></TopMessage></Col>
        </Row>
        <hr style={{borderColor: 'lightGray', marginBottom: '0'}}/>
        <h5 id="editButton" onClick={()=>this.changeIncome()}>Edit Income</h5>
        <Row noGutters="true" id="colorBarContainer">
          <h5 id="colorBarHoverText">{colorBarHoverText}</h5>
          <ColorBar bills={bills} containerWidth={containerWidth} showBillName={this.showBillName}></ColorBar>
        </Row>
        <Row noGutters="true">
          <BillCard bills={bills} editBillModal={this.createBillModal} deleteBill={this.deleteBill}></BillCard>
        </Row>
      </div>
    );
  }
  
}

export default App;
