import * as React from "react"

type RandomNumberType = {
    value: number
}

type PositiveNumber = RandomNumberType & {
    isPositive: boolean,
    isNegative?: never, 
    isZero?: never 
}

type NegativeNumber = RandomNumberType & {
    isNegative: boolean,
    isPositive?: never, 
    isZero?: never 
}

type Zero = RandomNumberType & {
    isZero: boolean,
    isPositive?: never,
    isNegative?: never, 
}

// type RandomNumberProperties = {
//     value: number, 
//     isPositive?: boolean, 
//     isNegative?: boolean, 
//     isZero?: boolean 
// }

type RandomNumberProperties = PositiveNumber | NegativeNumber | Zero

export const RandomNumber = ({ value, isPositive, isNegative, isZero }:RandomNumberProperties) => {
    return (
        <div>
            {value} {isPositive && 'Positive'} {isNegative && 'Negative'} {' '}
            {isZero && 'Zero'}
        </div>
    )
}