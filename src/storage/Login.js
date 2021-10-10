import React, { useEffect, useState } from 'react'

export const Login = () => {

    const [email, setemail] = useState('')
    const [name, setname] = useState('')

    const submit = (e) => {

        e.preventDefault()
       
    }
    
    useEffect(() => {
        
        localStorage.setItem("name",JSON.stringify(name))
        localStorage.setItem("email",JSON.stringify(email))
    }, )


    return (
        <div>
            <form onSubmit={submit}>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => { setemail(e.target.value) }} />

                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Employee name</label>
                    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" onChange={(e) => { setname(e.target.value) }} />

                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}
