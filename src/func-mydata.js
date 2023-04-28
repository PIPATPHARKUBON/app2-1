import React from 'react'
export function Myabout(){         
    return(
        <div style={{textAlign:'center'}}>
           <h2 style={{color:'#330066'}}>ข้อมูลส่วนตัว</h2> 
        </div>
        )
}
export function Myimage(){
    return(
        <div style={{textAlign:'center'}}>
        <img src="./imges/cat.jpg" width="10%" />
        <h2></h2>
        </div>
    )
}
export function Mydata(){         
    return(
        <div style={{textAlign:'center',color:'#FF6699'}}>
         ชื่อ-นามสกุล : พิพัฒน์ ภาคอุบล <br/>
         ชื่อเล่น : โย
         เรียนระดับชั้น : ป.ตรี<br/>
         อายุ : 21 ปี
        </div>
        )
}
