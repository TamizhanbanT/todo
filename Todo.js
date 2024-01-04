import React, { useState } from 'react';
import { Dropdown, DropdownMenu, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import Button from 'react-bootstrap/Button';
import  Container from 'react-bootstrap/Container';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from 'react-bootstrap/DropdownItem';


import "./Todo.css"
import { NotificationImportant } from '@mui/icons-material';



function Trail() {


    const[data,setdata]=useState([]);
    const[inp2,setinp2]=useState("");
    const[inp1,setinp1]=useState("");

    
   
    const Change1= (event) =>{

      event.preventDefault();
      
      setdata([...data,{ id:uuidv4() ,title:inp1,description:inp2,status:false}])
      setinp1("");
      setinp2("");

    }
    const handleDelete =({id})=>{
      setdata(data.filter((y)=>y.id!==id))
    }
    const Com =(a)=>{
      setdata(data.map((z)=>{
        if(z.id===a.id){
          return{...z, status:true}
          
        }
        return z;
      }))
    }
    const Notcom =(a)=>{
      setdata(data.map((z)=>{
        if(z.id===a.id){
          return{...z, status:false}
          
        }
        return z;
      }))
    }
    let color=(b)=>{return( data.map((x)=>{
      if(x.id==b.id){
      if(x.status){
        return("completed")
      }
      else{
        return("not completed")
      }}
    })
  )}

  return (
    <div>
      <h2 class="he">MY TODO</h2>
      <Form onSubmit={Change1} className="for">
        <input type='text' placeholder='Enter the name' value={inp1} required className='d1' onChange={(event)=>setinp1(event.target.value)}></input>

        <input type='text' placeholder='Description' value={inp2} required className='d1' onChange={(event)=>setinp2(event.target.value)}></input>

      <Button type='submit' variant='success'>Add Todo</Button>
      
      </Form>
      
      
     <span class="sp"><h4>My todos</h4><h4 className="st">Status Filter:
     <Dropdown className="d-inline mx-2" >
                  <Dropdown.Toggle id="dropdown-autoclose-true">
                                 all
                    </Dropdown.Toggle>
                    <DropdownMenu>
                      <DropdownItem>All</DropdownItem>
                      <Dropdown.Item >Completed</Dropdown.Item>
                      <Dropdown.Item >Not Completed</Dropdown.Item>
                      </DropdownMenu>  
                   </Dropdown>
      </h4></span>
      {
        data.map((x)=> (
          <div class="container">
           <li key={x.id} class="list">
          <h6>Name:<input value={x.title}   type="text" class="inp" onChange={(event)=>event.preventDefault()}/></h6> 
          <h6>Description: <input value={x.description} type="text" class="inp" onChange={(event)=>event.preventDefault()}/></h6>
           <h6>Status
                  <Dropdown className="d-inline mx-2" >
                  <Dropdown.Toggle id="dropdown-autoclose-true">
                                 {color(x)}
                    </Dropdown.Toggle>
                    <DropdownMenu>
                      <Dropdown.Item onClick={()=>Com(x)}>Completed</Dropdown.Item>
                      <Dropdown.Item onClick={()=>Notcom(x)}>Not Completed</Dropdown.Item>
                      </DropdownMenu>  
                   </Dropdown>
           </h6>
           <Button variant="primary" /* onClick={} */>EDIT</Button>
           <Button variant="danger" onClick={()=> handleDelete(x)}>DELETE</Button>        
           </li>
          </div>
        )
        )}
    </div>
  )
}
export default Trail;