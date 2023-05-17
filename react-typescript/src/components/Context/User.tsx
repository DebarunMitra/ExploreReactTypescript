import * as React from "react"
import { UserContext } from "./UserContext"

export const User = () => {
    // const [user, setUser] = React.useState<AuthUserTypes | null>(null)
    const userContext = React.useContext(UserContext)
    const handleLogin = () => {
        if(userContext){
            userContext.setUser({
                name: 'Debarun',
                email: 'deba@test.in'
            })
        }
    }
    const handleLogout = () => {
        if(userContext){
            userContext.setUser(null)
        }
    }



    return (
        <div>
            <h4>Login-Logout Ex Using useContext API</h4>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User Name Is {userContext?.user?.name}</div>
            <div>User Email Is {userContext?.user?.email}</div>
        </div>
    )
}