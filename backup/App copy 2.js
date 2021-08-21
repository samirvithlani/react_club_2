import logo from './logo.svg';
import './App.css';
import { Header } from './MyComponents/Header';
import { EmployeeList } from './MyComponents/EmployeeList';
import { Footer } from './MyComponents/Footer';
import { useState } from 'react'
import { AddEmployee } from './MyComponents/AddEmployee';


function App() {


  const title = "EMS"

  //const [state, setstate] = useState(initialState)


  const addEmployee = (name, salary) => {

    console.log("adding employee ",name, salary)

    const employee ={
      eName:name,
      eSalary:salary
    }

    //empList.push(employee)
    /// ... spread operator  -->list,array enhancement -->

   // setempList([...empList,employee])
    
    setempList([...empList,employee])
  }

  

  const [empList, setempList] = useState([

    {
      eId: 101,
      eName: "samir",
      eSalary: 10250.50
    },
    {
      eId: 102,
      eName: "sahdev",
      eSalary: 102500.50
    },
    {
      eId: 102,
      eName: "harsh",
      eSalary: 102500.50
    },

  ])


  const onDelete = (employee) => {

    // console.log("delete called..",employee)
    // //employe  == index find ,,splice ==>
    // var index = empList.indexOf(employee)
    // console.log("index of  = > ",index)
    // console.log("before delete",empList.length)
    // empList.splice(index,1)
    // console.log("after delete",empList.length)


    setempList(empList.filter((e) => {

      return e !== employee;

    }))

    console.log(empList)

  }

  return (

    <div>
      <AddEmployee addEmployee = {addEmployee} />
      <Header title={title} searchBar={false} />
      <EmployeeList empList={empList} onDelete={onDelete} />
      <Footer />

    </div>

  )
}

export default App;
