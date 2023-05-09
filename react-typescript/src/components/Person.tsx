import * as React from "react"

type PersonProps = {
    name: {
        firstName: string,
        lastName: string
    }
}

export const Person = (props: PersonProps) => {
    return (
        <div><h4>{props.name.firstName} {props.name.lastName}</h4></div>
    )
}