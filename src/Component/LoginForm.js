import React from "react";
import FormComponent from "./FormComponent";

function LoginForm(props){
     
    return (
        <div className="signupForm">
         <div className="form">
         <div className="make-div-column">
         <span className="bold-text">Hey,</span>
         <span className="bold-text">Welcome Back!</span>
         </div>
         <div style={{marginTop:'-10px'}}>
         <span style={{color: 'var(--text-slate-color-50, #7E8B9E)'}} className="text-font">We are very happy to see you back!</span>
         </div>
         <FormComponent value = {props.value}/>
         </div>
        </div>
    )
}

export default LoginForm;