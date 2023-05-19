import * as React from "react"

{/* HTML tag with restriction as any child node */}
// type ButtonProps = {
//     variant: 'primary' | 'secondary'
// } & React.ComponentProps<'button'>

{/* HTML tag with restriction as string */}
type ButtonProps = {
    variant: 'primary' | 'secondary'
    children: string
} & Omit<React.ComponentProps<'button'>, 'children'>

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
    return (
        <button className={`class-with-${variant}`} {...rest}>{children}</button>
    )
}