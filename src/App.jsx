import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Listitems from "./Listitems.jsx";


const TodoList = (props) =>{
  const[items,setItems]=useState('');

    const itemevent =(event) =>{
        setItems(event.target.value)

    }

    const [newitem,setNewitem]=useState([]);
   const listofitems=()=>{
       setNewitem((preval)=>{
           return[...preval,items]
       });
       setItems('');
       
   }


    return(<>
    
    <div className="main_div">
            <div className="box">
                 <h1>ToDo List</h1>
                <div className="button_center">
                <input 
                   type='text'
                   placeholder="Add a item" 
                   onChange={itemevent} 
                   value={items}></input>
                 <button    onClick={listofitems}  className='newBtn'>
                       <AddIcon/>
                </button>
                
                 
                </div>
                <ol>
                      { newitem.map((val,index)=>{
                            return <Listitems
                                      key={index}
                                     text={val}
                                           />
                        })}
                    
                </ol> 
                
            </div>
        </div>
    
    
    
    </>);


}
export default TodoList;