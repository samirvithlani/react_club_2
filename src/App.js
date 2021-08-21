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


function App() {

  const [users, setusers] = useState([])

  function fetchUserData() {

    fetch('https://reqres.in/api/users?page=2').then(res => {

      return res.json();

    }).then(data => {

      console.log(data.data)
      setusers(data.data)
    })

  }

  async function fetchUserData1(){

    const res = await fetch('https://reqres.in/api/users?page=2')
    const data = await res.json();

    setusers(data.data)


  }




  return (

    <div>
      <button className="btn btn-primary" onClick={fetchUserData1}>FETCH DATA</button>
      <Route path="/" exact>
        <UserList users = {users}/>
      </Route>
      <Route path="/user/:id">
        <UserDetail />
      </Route>
    </div>

  )
}

export default App;
