import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { StyleSheetManager } from "styled-components";
import { Montserrat_Alternates } from "next/font/google";
import { useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";
import MenuStyled from "./Menu.style";
import MenuButton from "./MenuButton";

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
                <Link 
                    className={`link ${pathname === '/conversores/tempo' ? 'active' : ''}`} 
                    href={"tempo"}
                    role="menuitem"
                >
                    Conversor de Tempo
                </Link>
                <Link 
                    className={`link ${pathname === '/conversores/peso' ? 'active' : ''}`} 
                    href={"peso"}
                    role="menuitem"
                >
                    Conversor de Peso
                </Link>

                <Link 
                    className={`link ${pathname === '/conversores/temperatura' ? 'active' : ''}`} 
                    href={"temperatura"}
                    role="menuitem"
                >
                    Conversor de Temperatura
                </Link>
                <Link 
                    className={`link ${pathname === '/conversores/moeda' ? 'active' : ''}`} 
                    href={"moeda"}
                    role="menuitem"
                >
                    Conversor de Moeda
                </Link>

                <Link 
                    className={`link ${pathname === '/conversores/velocidade' ? 'active' : ''}`} 
                    href={"velocidade"}
                    role="menuitem"
                >
                    Conversor de Velocidade
                </Link>
                <Link 
                    className={`link ${pathname === '/conversores/comprimento' ? 'active' : ''}`} 
                    href={"comprimento"}
                    role="menuitem"
                >
                    Conversor de Comprimento
                </Link>
                <Link 
                    className={`link ${pathname === '/conversores/documento' ? 'active' : ''}`} 
                    href={"documento"}
                    role="menuitem"
                >
                    Conversor de Documento
                </Link>
                <Link 
                    className={`link ${pathname === '/conversores/energia' ? 'active' : ''}`} 
                    href={"energia"}
                    role="menuitem"
                >
                    Conversor de Energia
                </Link>
                <Link 
                    className={`link ${pathname === '/conversores/midia' ? 'active' : ''}`} 
                    href={"midia"}
                    role="menuitem"
                >
                    Conversor de Mídia
                </Link>
            </MenuStyled>
        </StyleSheetManager>  
    )
}

export default Menu;