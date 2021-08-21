import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

export const UserDetail = () => {

    const prams = useParams()
    const [user, setuser] = useState('')
    const style = {
        width: "18rem"
    }


    function fetchUserData() {

        fetch(`https://reqres.in/api/users/${prams.id}`).then(res => {

            return res.json();

        }).then(data => {

            console.log(data.data)
            setuser(data.data)

        })

    }

    return (
        <div>
            <div class="card" style={style}>
                <img src={user.avatar} class="card-img-top" alt="" />

                <div class="card-body">
                    <h5 class="card-title">{user.first_name}</h5>
                    <p class="card-text">{user.last_name}</p>
                    <p class="card-text">{user.email}</p>
                    <a onClick={fetchUserData} class="btn btn-primary">get user</a>
                </div>
            </div>
        </div>
    )
}
