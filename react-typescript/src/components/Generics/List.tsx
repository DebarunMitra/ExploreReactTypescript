import * as React from "react"

type ListProps<T> = {
    // items: string[] | number[],
    // onClick: (value: string) => void
    items: T[],
    onClick: (value: T) => void
}

//we can specify some id object as mandatory like, { id: number }
export const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
    return (
        <div>
            <h2>List Of Items</h2>
            {
                items.map((item, index) => {
                    return (
                        <div key={index} onClick={() => onClick(item)}>
                            {item}
                        </div>
                    )
                })
            }
        </div>
    )
}