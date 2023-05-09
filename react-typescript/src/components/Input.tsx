import * as React from "react"

type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
    const [value, setValue] = React.useState('')
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value)
        setValue(event.target.value)
    }
    return <input type='text' 
    value={value} 
    onChange={handleInputChange} />
} 