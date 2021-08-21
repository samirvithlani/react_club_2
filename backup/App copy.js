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


function App() {





  return (

    <div>
      <MainHeader />
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/product" exact>
        <Product />
      </Route>
      <Route path="/product/:pId">
        <ProductDetail />
      </Route>
    </div>

  )
}

export default App;
