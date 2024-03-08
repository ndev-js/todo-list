
import React, { useState } from "react";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const Listitems=({text)=>{
const [line,setLine]=useState(false);
const cutIt =() =>{
    setLine(true)
}
return(<>
          <div className='todostyle'>
              <span  onClick={cutIt}>
                  <DeleteForeverIcon  className="dell"/></span>
          <li style={ {textDecoration: line ?'line-through':'none' }}>{text}</li>
          </div>

</>);

}

export default Listitems;
