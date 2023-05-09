import * as React from "react"

type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: boolean
}

export const Greet = (props : GreetProps) => {
    return (
        <>
            {!props.isLoggedIn?(
                <div>
                    <h2>Good Morning Guest!</h2>
                </div>
            ):(
                <div>
                    <h2>Welcome {props.name}! You have created React + Typescript Template</h2>
                    <h2>You Have {props.messageCount} Unread Messages!</h2>
                </div>
            )}
        </>
    )
}
