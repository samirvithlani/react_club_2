import logo from './logo.svg';
import './App.css';
import { Header } from './storage/Header'
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
import { createContext } from 'react'
import { Child } from './Child';
import { SearchMovie } from './movie/SearchMovie';
import { Login } from './storage/Login';
import { FileUploader } from './fileUploading/FileUploader';


export const GlobalInfo = createContext();

function App() {

  const [users, setusers] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setisLoading] = useState(false)
  const [resData, setresData] = useState('')

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
    toast.success("data addedd...", {
      position: toast.POSITION.TOP_CENTER
    })
    console.log(resData)


  }
  async function login() {

    var logindata = {
      email: "eve.holt@reqres.in",
      password: "cityslicka"
    }

    const res = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      body: JSON.stringify(logindata),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const resData = res.json();
    setresData(resData)

  }

  async function fetchUserData1() {

    try {

      setisLoading(true)
      const res = await fetch('https://reqres.in/api/users?page=2')
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




  const [mycolor, setcolor] = useState('blue')
  return (

    <div className="container mt-3">
      {/* <SearchMovie/> */}
      {/* <Header />

      
      <Login /> */}

      <FileUploader/>
    </div>
    // <GlobalInfo.Provider value={{ color: mycolor }}>

    //   <h1 style={{ color: mycolor }}>APP JS</h1>
    //   <Child/>
    // </GlobalInfo.Provider>
  )
}

export default App;
