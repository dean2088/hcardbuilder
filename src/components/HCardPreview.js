import React from "react";
import R from "ramda";
import {Thumbnail} from "react-bootstrap";
import {imageDefault} from "../images"

const HCardPreview = ({ hCard }) => {

  const tableLabelStyle={
    width:70,height: 40,
    verticalAlign: 'bottom',
    fontSize:12,
    color:"#4f6173"
  }

  const trStyle={
    borderBottom: '1px solid #dbe0e2'
  }

  const tableValueStyle = {
    verticalAlign: 'bottom',
    fontSize:16,
    color:"#333333"
  }



  return <div style={{margin: "0 auto"}}>
    <div style={{paddingBottom:5,textAlign: 'right',fontSize: 16, color:"#a4b2b3"}}>HCARD PREVIEW</div>
    <div style={{background:"white", minWidth: 430 }}>
    <div style={{height:100,background:"#2c3e50", position:'relative', display:'flex',justifyContent:"space-between"}}>
      <div style={{ alignSelf:"flex-end",
                    color:"white",
                    padding: "0px 0px 10px 20px",
                    fontWeight: 300,
                    fontSize: 24}} >
        {R.pathOr('',['given name'],hCard)} {R.pathOr('',['surname'],hCard)}
      </div>
      <Thumbnail style={{ width:83,
                          height:104,
                          borderRadius:0,
                          position:"relative",
                          top: 35,
                          right: 10,
                          alignSelf:"flex-end"}}
                 src={R.pathOr(imageDefault.avatar,['avatarUrl'],hCard)} />
    </div>
    <div style={{minHeight:230, padding:20, overflow: 'scroll'}}>
      <table style={{orderCollapse:"collapse",width:"100%"}}>
        <tbody>
        <tr style={trStyle}>
          <td style={tableLabelStyle}>EMAIL</td>
          <td colSpan={3} style={tableValueStyle}>{R.pathOr('',['email'],hCard)}</td>
        </tr>
        <tr style={trStyle}>
          <td style={tableLabelStyle}>PHONE</td>
          <td colSpan={3} style={tableValueStyle}>{R.pathOr('',['phone'],hCard)}</td>
        </tr>
        <tr style={trStyle}>
          <td style={tableLabelStyle}>ADDRESS</td>
          <td colSpan={3} style={tableValueStyle}>
            {R.pathOr('',['house name or #'],hCard)} {R.pathOr('',['street'],hCard)}
          </td>
        </tr>
        <tr style={trStyle}>
          <td style={tableLabelStyle}></td>
          <td colSpan={3} style={tableValueStyle}>{R.pathOr('',['suburb'],hCard)}, {R.pathOr('',['state'],hCard)}</td>
        </tr>
        <tr style={trStyle}>
          <td style={tableLabelStyle}>POSTCODE</td>
          <td style={Object.assign({},tableValueStyle,{
                      width:100
          })}>{R.pathOr('',['postcode'],hCard)}</td>
          <td style={tableLabelStyle}>COUNTRY</td>
          <td style={tableValueStyle}>{R.pathOr('',['country'],hCard)}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div>

    </div>
  </div>
  </div>
}

export default HCardPreview