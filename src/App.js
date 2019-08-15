import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddButton from './AddButton.js';

class App extends Component{

  constructor(){
    super()
    this.state={
      bills: []
    }
  }

  render(){
    return (
      <div>
        <Row noGutters="true">
          <Col lg="3"><AddButton></AddButton></Col>
          <Col lg="9">Text And Remaining Here</Col>
        </Row>
        <Row noGutters="true">
          Color Bar Here
        </Row>
        <Row noGutters="true">Main Info Here</Row>
      </div>
    );
  }
  
}

export default App;
