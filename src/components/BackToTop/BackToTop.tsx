import { useEffect, useState } from "react";
import { BackToTopContainer, BackToTopButton } from "./BackToTop.style";
import { useTheme } from "@/hooks";
import { darkTheme, lightTheme } from "@/themes";

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const { theme } = useTheme();
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        }
    }, [])

    const toggleVisibility = () => {
        if(window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <BackToTopContainer>
            {isVisible && 
                <BackToTopButton 
                    onClick={scrollToTop}
                    theme={theme === 'light' ? lightTheme : darkTheme}
                >
                    ^
                </BackToTopButton>
            }
        </BackToTopContainer>
    )
}

export default BackToTop;