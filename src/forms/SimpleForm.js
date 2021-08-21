import React from 'react'
import { useState, useRef } from 'react'
import UseInput from '../hooks/Use-Input'

export const SimpleForm = () => {

    const {value:name,valueChangeHandler:nameChangeHandler,valueBlurHandler:nameBlurHandler,hasError:nameValidation} = UseInput();

    //const [nameValidation, setnameValidation] = useState(true)
    const [emailValidation, setemailValidation] = useState(true);
    const email = useRef('')



    let isFormValid =true;

    if(nameValidation){

        isFormValid = true;
    }
    else{

        isFormValid = false;
    }


    const submit = (e) => {
        //e evant
        e.preventDefault();
        console.log("submit called....")

        console.log(email.current.value)
        if(email.current.value.trim() === ''){

            nameValidation(false)
            return;
        }
        else{
            nameValidation(true)
        }
    }

    // const nameBlurHandler = (e)=>{


    //     if(e.target.value.trim() === ''){

    //         console.log("blur called...")
    //         setnameValidation(false)
    //         return;
    //     }
    // }

    // const nameInputHandler = (e) => {

    //     console.log("called....", e.target.value)

    //     if (e.target.value.length <= 5) {

    //         console.log("if...")
    //         setnameValidation(false);
    //         return;
    //     }
    //     else {
    //         setnameValidation(true)
    //     }

    //     setname(e.target.value)
    // }




    

    return (
        <form onSubmit={submit}>
            <div className="form-control">
                <label htmlFor="name">ENTER NAME</label>
                <input type="text" id="name" onChange={nameChangeHandler} onBlur={nameBlurHandler}></input>
                {/* <input type="text" id="name" onChange ={(e)=>{setname(e.target.value)}}></input> */}
                {
                    !nameValidation && <p>please check len of name...</p>
                }
            </div>
            
            <div className="form-control">
                <label htmlFor="email">ENTER EMAIL</label>
                <input ref={email} type="text" id="email"></input>
                {/* <input type="text" id="name" onChange ={(e)=>{setname(e.target.value)}}></input> */}
                {
                    !emailValidation && <p>email is required...</p>
                }

            </div>
            <div className="form-action">

                <button disabled ={!isFormValid} type="submit" className="btn btn-success my-3">SUBMIT</button>
            </div>
        </form>
    )
}
