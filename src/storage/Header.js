import React, { useEffect, useState } from 'react'

export const Header = () => {
    const [name, setname] = useState('')
    useEffect(() => {
       setname(localStorage.getItem("name"))
        
    }, )
    return (
        <div className ="row col-1">
            <h1>{name}  </h1>
            <h1>{localStorage.getItem("email")}</h1>
        </div>
    )
}
