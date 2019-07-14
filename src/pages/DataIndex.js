import React , { useState } from 'react';
import DataForm from '../components/DataForm';
import Result from '../components/Result';
import '../styles/DataIndex.css'


const DataIndex = () =>{
  const [camp1,setCamp1] = useState('');
  const [camp2,setCamp2] = useState('');
  const [dates,setDates] = useState([]);
  const [id, setId]= useState(1);
  const [showResult,setShowResult]= useState(false);
 

    
    
    const handleChange =(e) =>{
        if ("camp1" === e.target.title)
            setCamp1(e.target.value);
        else 
            setCamp2(e.target.value);       
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setId(id+1);
        setShowResult(true);
        setDates([...dates, {camp1,camp2,id}]);
    }
    
/*      const saveChanges = (e) => {
        e.preventDefault();
            setDates( () => {
            const list = dates.map( (date) => {
                if (date.id === e){
                    return ([date.id, camp1, camp2]);
                }
                else return date;
            }  )
            return list;
        } );
    }  */
 
        
        return(
            <div className = "container">
                <DataForm 
                    camp1 = {camp1}
                    camp2 = {camp2}
                    onChange = {handleChange}
                    onSubmit = {handleSubmit}
                    className = "formInput"
                    />
                 <Result 
                    form = {dates}
                    showResult = {showResult}
                    onChange = {handleChange}   
                    />
            </div>
        );
    
    
}

export default DataIndex