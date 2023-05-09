import * as React from "react"

type PersonListProps = {
    nameList: {
        firstName: string,
        lastName: string
    }[]
}

export const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.nameList.map(name => {
                return (
                    <h4>{name.firstName} {name.lastName}</h4>
                )
            })}
        </div>
    )
}