import React from 'react'
import { Link } from 'react-router-dom'

export const Product = () => {
    return (
        <div>
            <h4>product wroks !!</h4>
            <ul>
                <li>
                    <Link to ="product/p1">Iphone 12</Link>
                </li>
                <li>
                    <Link to ="product/p2">Asus ROG 3</Link>
                </li>
                <li>
                    <Link to ="product/p3">Iphone 12</Link>
                </li>
            </ul>
        </div>
    )
}
