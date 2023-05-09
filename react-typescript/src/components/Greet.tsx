import * as React from "react"

type GreetProps = {
    name: string,
    messageCount?: number, //optional props
    isLoggedIn: boolean
}

export const Greet = ({name, messageCount = 0, isLoggedIn} : GreetProps) => {
    // const {messageCount = 0} = props
    return (
        <>
            {!isLoggedIn?(
                <div>
                    <h2>Good Morning Guest!</h2>
                </div>
            ):(
                <div>
                    <h2>Welcome {name}! You have created React + Typescript Template</h2>
                    <h2>You Have {messageCount} Unread Messages!</h2>
                </div>
            )}
        </>
    )
}
