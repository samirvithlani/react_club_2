import React from 'react'
import { useState } from 'react'

export const AddEmployee = (props) => {

    const [name, setname] = useState('')
    const [salary, setsalary] = useState('')

    


    const submit = (e)=>{
        e.preventDefault();
        console.log("submit called.....")
        console.log("Name ==>",name)
        props.addEmployee(name,salary)

    }

    const nameInputHandler= (e)=>{

        console.log(e)
        console.log(e.target.value)
        setname(e.target.value)
    }

    // const salaryInputHandler = (e)=>{

    //     console.log(e.target.value)
    //     setsalary(e.target.value)
    // }


    return (
        <div className="container my-3">
            <h3>ADD Employee</h3>

            <form onSubmit = {submit} >
                <div class="form-group">
                    <label for="name">name</label>
                    <input type="text" value={name} class="form-control" onChange = {nameInputHandler} placeholder="Enter name" />
                    {name}

                </div>

                <div class="form-group">
                    <label for="salary">salary</label>
                    <input type="text" value ={salary} class="form-control" onChange={(e)=>{setsalary(e.target.value)}} placeholder="Enter salary" />
                    {salary}
                </div>

                <button type="submit" class="btn btn-success my-3">Submit</button>
            </form>
        </div>
    )
}
