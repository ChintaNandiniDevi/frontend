import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import RegisterService from '../service/RegisterService';


const Register = () => {

    const [customerName, setCustomerName]= useState('')
    const [customerEmail, setCustomerEmail]=useState('')
    const [customerPassword, setCustomerPassword]=useState('')
    const [customerAddress, setCustomerAddress]=useState('')

    const saveCustomer=(e)=>{
        e.preventDefault();

        const customer={customerName, customerEmail, customerPassword, customerAddress}
        //console.log(customer);
        RegisterService.insertUserInfo(customer).then((response)=>{
            console.log(response.data)
            alert("registered sucessfully")
        }).catch(error=>{
            console.log(error)
        })

    }

    return (
        <div className='container'>
            <h1 align="center">Register</h1>


            <div class="reg">
                <div class="mb-3">
                    <label  class="form-label">Name</label>
                    <input type="text" class="form-control" value={customerName}  onChange={(e)=>setCustomerName(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label  class="form-label">Email address</label>
                    <input type="email" class="form-control" value={customerEmail}  onChange={(e)=>setCustomerEmail(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label  class="form-label">password</label>
                    <input type="password" class="form-control" value={customerPassword}  onChange={(e)=>setCustomerPassword(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label  class="form-label">Address</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value={customerAddress}  onChange={(e)=>setCustomerAddress(e.target.value)}></textarea>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" onClick={(e)=>saveCustomer(e)}>Save</button>
                    {/* <Link to="/sucess" class="btn btn-primary">Submit</Link> */}
                </div>
            </div>
        </div>
    )
}
export default Register;