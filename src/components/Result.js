import React  from 'react';
import '../styles/Result.css'
import Data from './Data'

const Result = (props) => {

    

    if (props.showResult && !props.edit){ 
        return (
            <div className = "bodyResult">
                {props.form.map((data)=>
                        <div className = "object" key= {data.id}>
                            <Data 
                                camp1={data.camp1}
                                camp2={data.camp2}
                                onChange = {props.onChange}
                            />
                        </div>   
                )}
            </div> 
        );  
    }
    else
        return null;    
}

export default Result