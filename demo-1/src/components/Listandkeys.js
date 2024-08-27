import React from 'react'

function Listandkeys() {
    const names = ['Mohan', 'Sohan', 'Rohan'];
  return (
    <ul>
        {names.map((name, index) => (
            <li key={index}>{name}</li>
        ))}
    </ul>
  )
}

export default Listandkeys
