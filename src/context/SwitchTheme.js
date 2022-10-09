import React, { createContext, useState} from 'react'

export const SwitchThemeContext = createContext()

export const SwitchThemeProvider = props => {

    const [theme, setTheme] = useState('dark')
    return (
        <SwitchThemeContext.Provider value={{
            theme, setTheme
            }}>
            {props.children}
        </SwitchThemeContext.Provider>
    )


}