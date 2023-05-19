import * as React from "react"

type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastPositionProps = {
    position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
}


export const Toast = ({ position }: ToastPositionProps) => {
    return (
        <div>
            Toast Notification Position - {position}
        </div>
    )
}