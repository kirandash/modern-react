import React, { useState, useEffect } from 'react'

export default function Clicker() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        // Called on render and after every update
        // alert("Something changed!")
        document.title = `You clicked ${count} times`
    })
    return (
        <button onClick={() => setCount(count + 1)}>Click Me!</button>
    )
}
