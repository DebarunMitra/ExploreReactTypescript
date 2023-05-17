import React, { useRef, useEffect } from "react"

export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!) // ! can be used to remove optional chaining i.e. '?.'

    useEffect(() => {
        inputRef.current.focus() // removed '?.'
    }, [])

    return (
        <div>
            <input type='text' ref={inputRef} />
        </div>
    )
}