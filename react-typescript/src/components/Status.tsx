import * as React from "react"

type StatusProps = {
    // status: string
    status: 'loading' | 'success' | 'error' | '' // union of string litirals
}

export const Status = (props: StatusProps) => {
    let message = 'Loading'

    if(props.status === 'loading' || props.status === ''){
        message = 'Loading...'
    }else if(props.status === 'success'){
        message = 'Data Fetched Successfully!'
    }else if(props.status === 'error'){
        message = 'Error Fetching Data!'
    }
    return (
        <div>
            <h3>Status - {message}</h3>
        </div>
    )
}