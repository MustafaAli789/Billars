import React, {Component} from 'react';
import './App.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddButton from './AddButton.js';
import BillModal from './BillModal.js';
import BillCard from './BillCard.js';


class App extends Component{

  constructor(){
    super()
    this.state={
      bills: [],
      renderModal: false,
      modalData: {},
    }
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

  render(){
    const {bills, renderModal, modalData} = this.state;
    const billModal = renderModal ? <BillModal show={true} data={modalData} setModalVisible={this.setModalVisible} submit={this.addEditBill}/> : null;
    return (
      <div className="container">
        {billModal}
        <Row noGutters="true">
          <Col lg="3"><AddButton createNewBill={this.createBillModal}></AddButton></Col>
          <Col lg="9"><h1></h1></Col>
        </Row>
        <Row noGutters="true">
          Color Bar Here
        </Row>
        <Row noGutters="true">
          <BillCard bills={bills} editBillModal={this.createBillModal} deleteBill={this.deleteBill}></BillCard>
        </Row>
      </div>
    );
  }
  
}

export default App;
