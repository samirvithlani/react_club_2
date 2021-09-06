import React from 'react'
import { useContext } from 'react'
import { GlobalInfo } from './App'


export const SuperChild = () => {
    const{color} = useContext(GlobalInfo);
    return (
        <div>
            <h4 style={{color:color}}>Super Child</h4>
        </div>
    )
}
