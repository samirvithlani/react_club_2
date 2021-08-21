
import { useState } from "react";

const UseInput = ()=>{

    const [enteredValue, setenteredValue] = useState('')
    const [inputvalidation, setinputvalidation] = useState(true)

    const valueChangeHandler =(e)=>{

        console.log("in..........!!")
        setenteredValue(e.target.value)
        console.log("use input",e.target.value)
        
    }
    const valueBlurHandler = (e)=>{

        if(e.target.value.trim() === ''){

            console.log("blur called...")
            setinputvalidation(false)
            return;
        }
    }

    return{

        value:enteredValue,valueChangeHandler,valueBlurHandler,hasError:inputvalidation
    }
}

export default UseInput;