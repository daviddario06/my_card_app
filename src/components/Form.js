import React from 'react'

const Form = (props) => (

    <form className = {props.className} onSubmit = { props.onSubmit}>
        <input className = {props.className1} type = "text" placeholder = "Ingrese Algo" onChange = {props.onChange} title = "camp1" value = {props.camp1}></input>
        <input className = {props.className2} type = "text" placeholder = "Ingrese Algo" onChange = {props.onChange} title = "camp2" value = {props.camp2}></input>
        <button className = "saveButton"> Save</button>
    </form>
)

export default Form