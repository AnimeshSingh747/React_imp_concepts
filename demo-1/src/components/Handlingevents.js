import React from 'react'

function Handlingevents() {
    function handleClick() {
        alert('Button clicked!');
    }
  return (
    <button onClick={handleClick}>
        Click Me
    </button>
  )
}

export default Handlingevents
