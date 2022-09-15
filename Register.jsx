import React from 'react'


const Register = () => {


    


    return (
        <div className='container'>
            <h1 align="center">Register</h1>


            <div class="reg">
                <div class="mb-3">
                    <label  class="form-label">Name</label>
                    <input type="text" class="form-control"   />
                </div>
                <div class="mb-3">
                    <label  class="form-label">Email address</label>
                    <input type="email" class="form-control" 
              />
                </div>
                <div class="mb-3">
                    <label  class="form-label">password</label>
                    <input type="password" class="form-control" />
                </div>
                <div class="mb-3">
                    <label  class="form-label">Address</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ></textarea>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">Submit</button>
                </div>
            </div>
        </div>
    )
}
export default Register;