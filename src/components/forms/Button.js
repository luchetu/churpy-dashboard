import React from 'react';

const Button = ({text}) => {
    return (
        <div>
        <button className='rounded bg-green-500 p-1 text-white w-40'>{text}</button>
    </div>
    )
}

export default Button