import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styled, { StyleSheetManager } from "styled-components";
import { MenuMobileButton } from "./MenuMobileButton";
import { MenuMobileStyledProps } from "@/types";
import { Montserrat_Alternates } from "next/font/google";

const Montz = Montserrat_Alternates({ weight: '300', subsets: ["latin"] });

const MenuMobileStyled = styled.nav<MenuMobileStyledProps>`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    width: 100vw;
    height: 100vh;
    top: 0;
    right: ${({ isopen }) => (isopen === "true" ? '0' : '-100vw')};

    backdrop-filter: blur(4px);
    z-index: 2;
    transition: right .3s ease-in-out;

    a {
        text-decoration: none;
        color: black;
        cursor: pointer;
    }

    .active {
        text-decoration: underline;
    }
`

function MenuMobile() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return(
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'isopen'}>
            <MenuMobileButton isopen={isOpen.toString()} onClick={() => setIsOpen(!isOpen)}>
                <div className="lines line1"></div>
                <div className="lines line2"></div>
                <div className="lines line3"></div>
            </MenuMobileButton>

            <MenuMobileStyled isopen={isOpen.toString()} className={Montz.className}>
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
            </MenuMobileStyled>
        </StyleSheetManager>
        
    )
}

export default MenuMobile;