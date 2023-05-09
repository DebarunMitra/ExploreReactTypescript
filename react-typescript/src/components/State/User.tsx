import * as React from "react"

type AuthUserTypes = {
    name: string,
    email: string
}

//Variant 1: We can use null data type with a '?' operator value check
// export const User = () => {
//     const [user, setUser] = React.useState<AuthUserTypes | null>(null)
//     const handleLogin = () => {
//         setUser({
//             name: 'Debarun',
//             email: 'deba@test.in'
//         })
//     }
//     const handleLogout = () => {
//         setUser(null)
//     }



//     return (
//         <div>
//             <button onClick={handleLogin}>Login</button>
//             <button onClick={handleLogout}>Logout</button>
//             <div>User Name Is {user?.name}</div>
//             <div>User Email Is {user?.email}</div>
//         </div>
//     )
// }

// Variant 2: Type assersion added
export const User = () => {
    const [user, setUser] = React.useState<AuthUserTypes>({} as AuthUserTypes)
    const handleLogin = () => {
        setUser({
            name: 'Debarun',
            email: 'deba@test.in'
        })
    }
    // const handleLogout = () => {
    //     setUser(null)
    // }



    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <div>User Name Is {user.name}</div>
            <div>User Email Is {user.email}</div>
        </div>
    )
}