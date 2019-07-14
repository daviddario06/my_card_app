import React , { useState }from 'react';

import Form from './Form';

const Data = (data) =>{

    const [edit,setEdit] = useState(true);
    const [camp1,setCamp1] = useState(data.camp1);
    const [camp2,setCamp2] = useState(data.camp2);
 

    
    
     const handleChange =(e) =>{
        if ("camp1" === e.target.title)
            setCamp1(e.target.value);
        else 
            setCamp2(e.target.value);       
    } 
   
    const handleClick = (e) => {
        e.preventDefault();
        setEdit (!edit);
    }

    if (edit){
        return( 
            <React.Fragment>
                <h2> {camp1}</h2>
                <h2>{camp2}</h2>
                <button className = "editButton"  onClick = {handleClick} >Edit</button>
            </React.Fragment>
        );
    }
    else {
        return (
            <Form
                camp1 = {camp1}
                camp2 = {camp2}
                onSubmit = {handleClick}
                onChange = {handleChange}
            />
        );
    }
}

export default Data