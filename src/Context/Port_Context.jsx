import React, { createContext, useState } from 'react'
export const Port_context = createContext(null);

const Port_ContextProvider = (props) => {
    const [theme, setTheme] = useState();
    const [color, setColor] = useState();

    function themeChanger() {
        const data = document.getElementById('root');
        const dark = data.style.background = 'black'

        if (theme === dark && color === 'white') {
            setTheme(data.style.background = 'white');
            setColor(data.style.color = 'black')
        } else {
            setTheme(data.style.background = 'black');
            setColor(data.style.color = 'white')
        }
        console.log(theme);
        return theme;
    }

    const contextValue = { themeChanger }
    return (
        <Port_context.Provider value={contextValue}>
            {props.children}
        </Port_context.Provider>
    )
}

export default Port_ContextProvider;