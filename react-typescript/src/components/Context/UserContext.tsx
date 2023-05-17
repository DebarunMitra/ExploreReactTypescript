import * as React from 'react'

export type AuthUser = {
    name: string,
    email: string
}
type UserContextProviderProps = {
    children: React.ReactNode
}

type UserContextValueType = {
    user: AuthUser | null,
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>> 
}


export const UserContext = React.createContext<UserContextValueType | null>({} as UserContextValueType)

export const UserContextprovider = ({children}: UserContextProviderProps) => {
    const [user, setUser] = React.useState<AuthUser | null>(null)
    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}
