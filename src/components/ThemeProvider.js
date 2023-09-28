import React from 'react';

const ThemeContext = React.createContext()
const ThemeProvider = (props) =>{

    return (
        <ThemeContext.Provider value={props.value}>
           
            {props.childern}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider,ThemeContext}