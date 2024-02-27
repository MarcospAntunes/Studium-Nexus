import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { StyleSheetManager } from "styled-components";
import { Montserrat_Alternates } from "next/font/google";
import { useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";
import MenuStyled from "./Menu.style";
import MenuButton from "./MenuButton/MenuButton";

const Montz = Montserrat_Alternates({ weight: '300', subsets: ["latin"] });

function Menu() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useTheme();

    return(
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isopen'}>
            <MenuButton 
                isopen={isOpen.toString()} 
                onClick={() => setIsOpen(!isOpen)} 
                theme={theme === "light" ? lightTheme : darkTheme}
            >
                <div className="lines line1"></div>
                <div className="lines line2"></div>
                <div className="lines line3"></div>
            </MenuButton>

            <MenuStyled 
                isopen={isOpen.toString()} 
                className={Montz.className} 
                theme={theme === "light" ? lightTheme : darkTheme}
            >
                <Link href={"/"}>Home</Link>
                <Link 
                    className={`link ${pathname === '/conversores/tempo' ? 'active' : ''}`} 
                    href={"tempo"}
                >
                    Conversor de Tempo
                </Link>
                <Link 
                    className={`link ${pathname === '/conversores/peso' ? 'active' : ''}`} 
                    href={"peso"}
                >
                    Conversor de Peso
                </Link>

                <Link 
                    className={`link ${pathname === '/conversores/temperatura' ? 'active' : ''}`} 
                    href={"temperatura"}
                >
                    Conversor de Temperatura
                </Link>
                <Link 
                    className={`link ${pathname === '/conversores/moeda' ? 'active' : ''}`} 
                    href={"moeda"}
                >
                    Conversor de Moeda
                </Link>

                <Link 
                    className={`link ${pathname === '/conversores/velocidade' ? 'active' : ''}`} 
                    href={"velocidade"}
                >
                    Conversor de Velocidade
                </Link>
                <Link 
                    className={`link ${pathname === '/conversores/comprimento' ? 'active' : ''}`} 
                    href={"comprimento"}
                >
                    Conversor de Comprimento
                </Link>
                <Link 
                    className={`link ${pathname === '/conversores/documento' ? 'active' : ''}`} 
                    href={"documento"}
                >
                    Conversor de Documento
                </Link>
                <Link 
                    className={`link ${pathname === '/conversores/energia' ? 'active' : ''}`} 
                    href={"energia"}
                >
                    Conversor de Energia
                </Link>
                <Link 
                    className={`link ${pathname === '/conversores/midia' ? 'active' : ''}`} 
                    href={"midia"}
                >
                    Conversor de Mídia
                </Link>
            </MenuStyled>
        </StyleSheetManager>  
    )
}

export default Menu;