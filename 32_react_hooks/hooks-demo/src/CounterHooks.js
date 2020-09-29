import React, { useState } from 'react'

function CounterHooks() {
    const [count, setCount] = useState(0)
    // the piece of state
    // function to update that piece of state
    // initial value for piece of state
    return (
        <div>
            <h1>The Count Is: {count}</h1>
            <button onClick={() => setCount(count+1)}>Add 1</button>
        </div>
    )
}

export default CounterHooks
