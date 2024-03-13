import { useEffect, useRef, useState } from "react";
import LazyLoadedProps from "./LazyLoaded.type";

function LazyLoadedText({ children, className }: LazyLoadedProps) {
    const [isVisible, setIsVisible] = useState(false);
    const paragraphRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      });
  
      if (paragraphRef.current) {
          observer.observe(paragraphRef.current);
      }
  
      return () => {
        observer.disconnect();
      };
    }, []);
  
    return (
        <p ref={paragraphRef} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.3s ease-in' }} className={className ? className : ''}>
          {children}
        </p>
    );
}

export default LazyLoadedText;