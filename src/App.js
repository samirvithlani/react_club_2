import logo from './logo.svg';
import './App.css';
import { Header } from './MyComponents/Header';
import { EmployeeList } from './MyComponents/EmployeeList';
import { Footer } from './MyComponents/Footer';
import { useState } from 'react'
import { AddEmployee } from './MyComponents/AddEmployee';
import { MainHeader } from './MyComponents/MainHeader';
import { Route } from 'react-router-dom';
import { Welcome } from './Pages/Welcome';
import { Product } from './Pages/Product';
import { ProductDetail } from './Pages/ProductDetail';
import { SimpleForm } from './forms/SimpleForm';
import { UserList } from './api/UserList';
import { UserDetail } from './api/User-Detail';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';



function App() {

  const [users, setusers] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setisLoading] = useState(false)

  // function fetchUserData() {

  //   fetch('https://reqres.in/api/users?page=2').then(res => {

  //     return res.json();

  //   }).then(data => {

  //     console.log(data.data)
  //     setusers(data.data)
  //   })

  // }


  async function addUser() {

    var user = {
      name: "samir",
      job: "Dev"
    }

    console.log("STRINGYFY", JSON.stringify(user))
    console.log("USER =>", user)

    const res = await fetch('https://reqres.in/api/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const resData = await res.json();
    //data added....
    toast.success("data addedd...",{
      position:toast.POSITION.TOP_CENTER
    })
    console.log(resData)


  }

  async function fetchUserData1() {

    try {

      setisLoading(true)
      const res = await fetch('https://reqres.in/api/users/23')
      const data = await res.json();
      setusers(data.data)
      setisLoading(false)

      if (!res.ok) {

        throw new Error('something went wrong....')
      }

    } catch (error) {

      console.log(error.message)
      setError(error.message)
      setisLoading(false)
    }


  }




  return (

    <div>
      <button className="btn btn-primary" onClick={fetchUserData1}>FETCH DATA</button>
      <button className="btn btn-primary" onClick={addUser}>adD DATA</button>

      <ToastContainer />
      <Route path="/" exact>
        {
          !isLoading && users != undefined && users.length > 0 && <UserList users={users} />
        }

        {
          isLoading && <p>Loading !!!</p>
        }
        {
          !isLoading && error && <p>{error}</p>
        }

      </Route>
      <Route path="/user/:id">
        <UserDetail />
      </Route>
    </div>

  )
}

export default App;
