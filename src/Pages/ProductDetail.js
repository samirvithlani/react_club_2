import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
    const params = useParams();
    return (
        <div>
            <h4>product Detail wroks !!</h4>
            {params.pId}
        </div>
    )
}
