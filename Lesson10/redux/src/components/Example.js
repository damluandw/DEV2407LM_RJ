import React, { createContext, useState } from 'react'
import Content from './Content';
export const ThemeContext = createContext();
function Example() {
    // Context
    const [theme, setTheme] = useState('dark')
    const toggleTheme = () => {
        // console.log(theme);
        setTheme(theme == 'dark' ? 'light' : 'dark')
    }
    
    return (
        <ThemeContext.Provider value={theme}>
        <div style={{padding:50}}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Content/>
        </div>
       </ThemeContext.Provider>
    )
}

export default Example