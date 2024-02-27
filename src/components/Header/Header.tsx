/* eslint-disable @next/next/no-img-element */

import { StyleSheetManager } from "styled-components";
import { useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";
import { MenuMobile } from "..";
import { HeaderStyled, LineStyled } from "./Header.style";

function Header({ convertion = false }) {
    const { theme, themeToggler } = useTheme();
    const handleThemeToggle = (target: string) => {
        themeToggler(target)
    }
    const invertTheme = theme === "dark" ? "light" : "dark"
    const source = theme === "light" ? "sol.png" : "lua.png"

    if(convertion) {
        return(
            <StyleSheetManager shouldForwardProp={(prop) => prop !== 'convertion'}>
                <HeaderStyled convertion={convertion.toString()}>
                    <div>
                        <h1>FC</h1>
                        <div>
                            <img src={`../../images/icons/${source}`} alt="change theme" onClick={() => handleThemeToggle(invertTheme)}/>
                            <MenuMobile />
                        </div>
                    </div>
                    <LineStyled theme={theme === "light" ? lightTheme : darkTheme} />
                </HeaderStyled> 
            </StyleSheetManager>
        )
            
    } else {
        return(
            <StyleSheetManager shouldForwardProp={(prop) => prop !== 'convertion'}>
                <HeaderStyled convertion={convertion.toString()}>
                    <span></span>
                    <h1>Fast Converter</h1>
                    <img src={`../../images/icons/${source}`} alt={`${theme} theme`} onClick={() => handleThemeToggle(invertTheme)}/>
                </HeaderStyled>
            </StyleSheetManager>
            
        )
    }
}

export default Header;