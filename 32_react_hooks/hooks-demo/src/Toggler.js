import React, { useState } from 'react'
import useToggle from './hooks/useToggle'

function Toggler() {
    const [isHappy, toggleIsHappy] = useToggle(true)
    const [isHeartBroken, toggleIsHeartBroken] = useToggle(true)
    const [isBanana, toggleIsBanana] = useToggle(false)
    // const [isHappy, setIsHappy] = useState(true)
    // const [isHeartBroken, setIsHeartBroken] = useState(true)
    // const toggleIsHappy = () => {
    //     setIsHappy(!isHappy)
    // }
    // const toggleIsHeartBroken = () => {
    //     setIsHeartBroken(!isHeartBroken)
    // }
    // return <h1 onClick={() => setIsHappy(!isHappy)}>{isHappy ? "Is Happy" : "Sad"}</h1>
    // <h1 onClick={toglleIsHappy}>{isHappy ? "Is Happy" : "Sad"}</h1>
    return (
        <div>
            <h1 onClick={toggleIsHappy}>{isHappy ? "Is Happy" : "Sad"}</h1>
            <h1 onClick={toggleIsHeartBroken}>{isHeartBroken ? "Is Heart Broken" : "Heart Healed"}</h1>
            <h1 onClick={toggleIsBanana}>{isBanana ? "Is Banana" : "Is Apple"}</h1>
        </div>
    )
}

export default Toggler
