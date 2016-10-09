"use strict";

import React from "react";
import {Grid,Row,Col, Button} from "react-bootstrap";
import HCardForm from "../components/HCardForm";
import HCardPreview from "../components/HCardPreview";
import UploadButton from "../components/UploadButton"


class HCardBuilder extends React.Component {

  constructor() {
    super();

    this.state = {
      hCard:{}
    };

    this.btnStyle = {
      color:"white", width:"100%", fontWeight:300
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }


  handleChange(e,label){

    let update = {}
    update[label] = e.target.value

    this.setState({
      hCard:Object.assign({},this.state.hCard,update)
    })

    update = null
  }

  handleUpload(e){

    const reader = new FileReader();

    const url = reader.readAsDataURL(e.target.files[0]);

    reader.onloadend = (e) => {
      this.setState({
        hCard:Object.assign(
          {},
          this.state.hCard,
          {avatarUrl:reader.result})
    })
    }

  }


  render() {

    return <Grid style={{ width:"100vw"}}>
      <Row className="show-grid">
        <Col xs={12} md={6} style={{minHeight:"100vh",display: "flex",alignItems:"center"}}>
          <div style={{}}>
            <div style={{ color:"#2c3e50",
                          fontSize: 40,
                          fontWeight: 600,
                          paddingBottom: 30}}>hCard Builder</div>
          <HCardForm handleChange={this.handleChange} title="personal details"
                     labels = {['given name','surname','email','phone']}/>
          <HCardForm handleChange={this.handleChange} title="address"
                     labels = {['house name or #','street','suburb','state','postcode','country']}/>

          <Row >
            <Col xs={12} md={6} style={{paddingBottom:15}}>
              <UploadButton
                style={Object.assign({},this.btnStyle,{background:"#627b8b"})}
                handleUpload={this.handleUpload} >
                Upload Avatar
              </UploadButton>
            </Col>
            <Col xs={12} md={6} style={{paddingBottom:15}}>
              <Button
                style={Object.assign({},this.btnStyle,{background:"#3498db"})}
                bsStyle="primary" >
                Create hCard 1
              </Button>
            </Col>
          </Row>
          </div>
        </Col>
        <Col xs={12} md={6} style={{background:"#e1e4e7",minHeight:"100vh",display: "flex", alignItems:"center"}}>
          <HCardPreview hCard = {this.state.hCard} />
        </Col>
      </Row>
    </Grid>
  }
}


export default HCardBuilder
