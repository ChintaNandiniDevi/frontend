import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react'
import axios from 'axios'
import LoginService from '../service/LoginService'

const Login = () => {
    

   const [form, setForm]=useState({})
   const [errors, setErrors]=useState({})
   const setField=(field, value)=>{
    setForm(
        {
            ...form,
            [field]:value
        })

        if(!!errors[field])
        setErrors({
            ...errors,
            [field]:null
        })
   }

   const validateForm=()=>{

    const{email, password}=form
    const newErrors={}

    if(!email || email==='') newErrors.email="please enter email"

    if(!password|| password==='') newErrors.password="please enter password"

    return newErrors

   }

   const handleSubmit=(e)=>{
    e.preventDefault()
    const formErrors=validateForm()
    if(Object.keys(formErrors).length>0){
        setErrors(formErrors)
    }
    else{
        console.log("form submitted")
       // LoginService.createAuthenticationToken(form)
   // console.log(form)
    }
   }

    return (
        <div className='container'>
            <h1 align="center">Login</h1>


            <div class="reg">
                
                <div class="mb-3">
                    <label  class="form-label" >Email address</label>
                    <input type="email" class="form-control" value={form.email} onChange={e=>setField('email',e.target.value)} isInvalid={!!errors.email}/>
                    
                </div>
                <div class="mb-3">
                    <label  class="form-label">password</label>
                    <input type="password" class="form-control" value={form.password} onChange={e=>setField('password',e.target.value)} isInvalid={!!errors.password}/>
                </div>
                
                <div class="col-12">
                    {/* <Link to="/washpack"><button class="btn btn-primary" type="submit" onClick={handleSubmit}>Login</button></Link> */}
                    <button><Link to="/washpack">click</Link></button>
                </div>
            </div>
        </div>
    )
}
export default Login;