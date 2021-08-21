import React from 'react'
import { Link } from 'react-router-dom'

export const MainHeader = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/welcome">WELCOME</Link>
                    </li>
                    <li>
                        <Link to="/product">Product</Link>
                    </li>
                  
                </ul>
            </nav>
        </div>
    )
}
