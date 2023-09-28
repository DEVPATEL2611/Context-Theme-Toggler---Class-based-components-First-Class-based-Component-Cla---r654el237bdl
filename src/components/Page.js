import React, { useContext } from 'react';
import { LocalThemedBox } from './LocalThemedBox';
import { ThemeContext } from './ThemeProvider';

const Page = () => {
    const context = useContext(ThemeContext);
    return(
        <div className={"container" + `bg-${context.theme}`} id="themed-page">
            <p id="themed-text-container" className={'txt-'+context.theme}>
                lorem ipsum dolor iterit n stuff
            </p>
            <button className={"btn btn-"+context.theme} id="themed-button">Themed Button</button>
            <LocalThemedBox />
        </div>
    )
}

export { Page }