import React from 'react'
export function Navber(){
    const aStyle={
        display:'inline-block',
        color:'red',
        margin:'10px',
        textDecoration:'none'
    }
    return(
        <div style={{backgroundColor: '#ccc' }}>
            <a href='https://www.google.com/' style={aStyle}>กดฉันสิ</a>|&nbsp;
            <a href='#' style={aStyle}>อย่าเข้ามานะ</a>|&nbsp;
            <a href='#' style={aStyle}>ตามฉันมาสิ</a>|&nbsp;
        </div>
        )
}
export function Header(){
    return(
        <div style={{textAlign:'center', color:'navy'}}>
        <img src="./imges/cat.jpg" width="10%" />
        <h2>Hello compomemt</h2>    
        </div>
    )
}

export const Footer=() =>{
    return(
        <div>
        &copy; {new Date().getFullYear()} All rights reserved
        </div>
    )
}