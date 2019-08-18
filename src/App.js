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
    }
  }

  componentDidMount() {
    this.setState({containerWidth: document.getElementById("colorBarContainer").offsetWidth});
    window.addEventListener("resize", function(){
      this.setState({containerWidth: document.getElementById("colorBarContainer").offsetWidth});
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

  showBillName = (billId)=>{
    console.log(this.state.bills[billId].paymentName);
  }

  render(){
    const {bills, renderModal, modalData, containerWidth} = this.state;
    const billModal = renderModal ? <BillModal show={true} data={modalData} setModalVisible={this.setModalVisible} submit={this.addEditBill}/> : null;
    return (
      <div id="container" className="container" style={{marginTop: '1rem'}}>
        {billModal}
        <Row noGutters="true">
          <Col sm="2" style={{marginRight: '1rem', display: 'flex', alignItems: 'center'}}><AddButton createNewBill={this.createBillModal}></AddButton></Col>
          <Col sm="9" style={{display: 'flex', alignItems: 'center'}}><TopMessage bills={bills} startingMoney={1000}></TopMessage></Col>
        </Row>
        <hr style={{borderColor: 'lightGray', marginBottom: '0'}}/>
        <h5 id="editButton">Edit Income</h5>
        <Row noGutters="true" id="colorBarContainer" style={{marginTop: '1.2rem'}}>
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
