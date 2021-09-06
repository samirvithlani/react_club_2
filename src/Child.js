import React from 'react'
import { useContext } from 'react'
import { GlobalInfo } from './App'
import { SuperChild } from './SuperChild';

export const Child = () => {
    const{color} = useContext(GlobalInfo);
    
    return (
        <div>
            <h2 style={{color:color}}>Child</h2>
            
            <SuperChild/>
        </div>
    )
}
