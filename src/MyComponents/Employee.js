import React from 'react'

export const Employee = ({ employee,onDelete }) => {
    return (
        <div>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Salary</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td>{employee.eName}</td>
                        <td>{employee.eSalary}</td>
                        <td><button className = "btn btn-success" onClick ={()=>{onDelete(employee)}}>DELETE</button></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
