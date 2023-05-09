import * as React from "react"

import { Name } from './PropsTypes/Person.types'

type PersonListProps = {
    nameList: Name[]
}

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.nameList.map((name, index) => {
                return (
                    <h4 key={`name-${index}`}>{name.firstName} {name.lastName}</h4>
                )
            })}
        </div>
    )
}