import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from "react-bootstrap/Jumbotron";
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
      modalData: ["Add", "", "", "", "#fff"],
    }
  }


  addEditBill=(billInfo)=>{
      billInfo.title="Edit";
      var newStateArray = this.state.bills.slice();
      newStateArray.push(billInfo);
      this.setState({bills: newStateArray});  
      this.setModalVisible(false);
  }

  //used to createa new bill modal with specified data
  createNewBillModal=(data)=>{
    this.setModalVisible(true);
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
    const billModal = renderModal ? <BillModal show={true} data={this.state.modalData} setModalVisible={this.setModalVisible} submit={this.addEditBill}/> : null;
    return (
      <div className="container">
        {billModal}
        <Row noGutters="true">
          <Col lg="3"><AddButton createNewBill={this.createNewBillModal}></AddButton></Col>
          <Col lg="9">Text And Remaining Here</Col>
        </Row>
        <Row noGutters="true">
          Color Bar Here
        </Row>
        <Row noGutters="true">
          <BillCard bills={this.state.bills}></BillCard>
        </Row>
      </div>
    );
  }
  
}

export default App;
