import { createContext, useContext, useState } from "react"

const Context = createContext()
function Authcontext({children}){
    const [user, setuser] = useState()
    
    const value = {
        user,
        setuser
    }

    return(
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}
export default Authcontext

export const Useauth = () => {return useContext(Context)}