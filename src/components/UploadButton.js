"use strict";

import React from "react";
import {Button} from "react-bootstrap";


class UploadButton extends React.Component {

  constructor() {
    super();

    this.handleOpenFileDialog = this.handleOpenFileDialog.bind(this);
  }

  handleOpenFileDialog(e){

    const fileUploadDom = this.refs.fileUpload;
    fileUploadDom.click();
  }


  render() {

    const {style,children,handleUpload} = this.props

    return <div>
            <Button
                style={style}
                bsStyle="primary"
                onClick={this.handleOpenFileDialog} >
                {children}
            </Button>
      <input
        ref="fileUpload"
        type="file"
        accept="image/*"
        style={{"display" : "none"}}
        onChange={ e => {e.target.files[0]&&handleUpload(e)}}/>
    </div>
  }
}


export default UploadButton
