import React, { useState } from "react";
const Contact=()=>{
    const [data,setData]=useState({
        email:"",
        ps:"",

    })
    const inputEvnt=(evnt)=>{
        const {name,value}=evnt.target
        setData((prevData)=>{
            return {
                ...prevData,
                [name]:value,
            }
        })

        
    }

    const evsubmit=(e)=>{
       e.preventDefault();
       alert(`${data.email}`)

    }
    return <>
<form onSubmit={evsubmit}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={data.email} onChange={inputEvnt}/>
    </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name="ps" value={data.ps} onChange={inputEvnt}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </>
}

export default Contact