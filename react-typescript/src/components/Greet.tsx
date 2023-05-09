import * as React from "react"

type GreetProps = {
    name: string,
    messageCount?: number, //optional props
    isLoggedIn: boolean
}

export const Greet = (props : GreetProps) => {
    const {messageCount = 0} = props
    return (
        <>
            {!props.isLoggedIn?(
                <div>
                    <h2>Good Morning Guest!</h2>
                </div>
            ):(
                <div>
                    <h2>Welcome {props.name}! You have created React + Typescript Template</h2>
                    <h2>You Have {messageCount} Unread Messages!</h2>
                </div>
            )}
        </>
    )
}
