import React,{useState} from 'react'
import classes from './Name.module.css'

function Name(props) {
  
    return (
      <div className={classes.yourName}>
        <p>Please enter your first name</p>
        <input type="text" onChange={(e)=>{props.setName(e.target.value)}}/>
        <button onClick={props.OK}>OK</button>
      </div>
    );
  }
  
  export default Name;
  