
import React, { useState } from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const Listitems=(props)=>{
const [line,setLine]=useState(false);
const cutIt =() =>{
    setLine(true)
}
return(<>
          <div className='todostyle'>
              <span  onClick={cutIt}>
                  <DeleteForeverIcon  className="dell"/></span>
          <li style={ {textDecoration: line ?'line-through':'none' }}>{props.text}</li>
          </div>

</>);

}

export default Listitems;