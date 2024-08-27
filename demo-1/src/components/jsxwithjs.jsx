import React from 'react'

function Greeting() {
    const user = {firstname: "Mohan", lastname: "Sharma"};
    return <h1>Hello, {user.firstname + '' + user.lastname}!</h1>
}

export default Greeting;
