import React from "react"

export default function App() {
    const[state, setState] = React.useState("World")

    function hello() {
        if (state == "World") {
            setState("Universe")
        } else {
            setState("World")
        }
    }

    return <div onClick={hello}>Hello {state}</div>
}