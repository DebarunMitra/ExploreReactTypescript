import * as React from "react"
import {PersonProps} from './PropsTypes/Person.types'

export const Person = (props: PersonProps) => {
    return (
        <div><h4>{props.name.firstName} {props.name.lastName}</h4></div>
    )
}