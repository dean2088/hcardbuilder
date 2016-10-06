"use strict";

import React from "react";
import {Grid,Row,Col,FormGroup,ControlLabel, FormControl, HelpBlock} from "react-bootstrap";


const FieldGroup = ({label, handleChange}) =>
    <FormGroup>
      <ControlLabel style={{textTransform:'uppercase', color:"#2c3e50", fontWeight:300,marginBottom:0}}>
        {label}
      </ControlLabel>
      <FormControl type="text" onChange={e => handleChange(e,label) }/>
    </FormGroup>



const HCardForm = ({ handleChange, labels, title }) =>
  <Row >
    <Col xs={12}>
    <ControlLabel style={{textTransform:'uppercase', color:"#b0b8bc", fontWeight:300,marginBottom:0}}>
      {title}
    </ControlLabel>
    <hr style={{marginTop:5}}/>
    </Col>
    {labels.map((label,index)=>
      <Col xs={12} md={6} key={index}>
        <FieldGroup label={label} handleChange={handleChange} />
      </Col>
    )}
  </Row>


export default HCardForm