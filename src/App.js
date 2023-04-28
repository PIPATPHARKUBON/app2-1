
import React from 'react'
import {Myimage, Myabout,Mydata} from './func-mydata'
import MsgBox from './func-props'
import Caledar from './class-components'
import { Navber } from './func-components'





function App() {

  return   [<Navber/>,<Myabout/>,<Myimage/>,<Mydata/>,<Caledar/>]
  
}


/*return(
  <MsgBox 
  text="Useing props in function component"
  color="red"
  bgColor="#ccc"
  fontSize="16px"
  border="dotted 1px black"
  />
)*/


export default App;
