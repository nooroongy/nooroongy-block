
import React from 'react';
import '../css/button.css'

const Button = ({children,w,h}) =>{
    return (
        <button className={`btn-w${w} btn-h${h}`}>{children}</button>
    )
}

export default Button;