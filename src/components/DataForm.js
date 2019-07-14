import React from 'react';
import '../styles/DataForm.css'
import Form from './Form'

class DataForm extends React.Component {
 
    render(){
        const {onChange, onSubmit, className} = this.props
        return (
            <div className ="dataForm">
                <h1>Ingrese Algo</h1>
                <Form 
                    onSubmit = {onSubmit}
                    onChange = {onChange}
                    className = {className}
                    className1 = "camp1"
                    className2 = "camp2" 
                /> 
                <a href= "/Login" className = "home"> Login </a>
           </div>
        );
    }
}

export default DataForm 