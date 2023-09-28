import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';


const ThemeToggleButton = () =>{
    const context = useContext(ThemeContext);
    console.log(context)
    const toggleTheme = ()=>{
        const {setTheme} = context;
        if(context.theme === "light"){
            setTheme("dark");
        }else{
            setTheme("light");
        }
    }
    return (
       <>
       <button id="global-theme-toggler" onClick={toggleTheme} >
        Switch to {context.theme === "light" ? "dark" : "light"} the,e
       </button>
       </>
    )

}
export {ThemeToggleButton}