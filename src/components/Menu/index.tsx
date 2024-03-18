"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { StyleSheetManager } from "styled-components";
import { Montserrat_Alternates } from "next/font/google";
import { useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";
import MenuStyled from "./Menu.style";
import MenuButton from "./MenuButton";
import itens from '@/json/itens.json';

const Montz = Montserrat_Alternates({ weight: '300', subsets: ["latin"] });

function Menu(): JSX.Element {
    const pathname: string = usePathname();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { theme } = useTheme();

    return(
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isopen'}>
            <MenuButton 
                isopen={isOpen.toString()} 
                onClick={() => setIsOpen(!isOpen)} 
                theme={theme === "light" ? lightTheme : darkTheme}
                aria-label="menu de navegação"
                type="button"
                aria-haspopup={isOpen}
                aria-controls="menuNav"
            >
                <div className="lines line1"></div>
                <div className="lines line2"></div>
                <div className="lines line3"></div>
            </MenuButton>

            <MenuStyled 
                isopen={isOpen.toString()} 
                className={Montz.className} 
                id="menuNav"
                theme={theme === "light" ? lightTheme : darkTheme}
                role="menu"
            >
                <Link href={"/"}>Home</Link>

                {itens.map((item) => (
                    <Link
                        key={item.id}
                        className={`link ${pathname === item.link ? 'active' : ''}`} 
                        href={item.link}
                        role="menuitem"
                    >
                        {item.title}
                    </Link>
                ))}
            </MenuStyled>
        </StyleSheetManager>  
    )
}

export default Menu;