import React from 'react'
import { Employee } from './Employee'

export const EmployeeList = (props) => {
    return (
        <div className = "container">
            {
                props.empList.length <= 0 ? "No employee Founds..":

                props.empList.map((employee)=>{

                    return <Employee employee ={employee} onDelete ={props.onDelete}/>
                })
            }

        </div>
    )
}
