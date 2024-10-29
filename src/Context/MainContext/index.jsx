import React, { createContext, useState, useEffect, useRef } from 'react';

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const whiteSectionRef = useRef(null);
  
    const handleScroll = () => {
        if (whiteSectionRef.current) {
          const rect = whiteSectionRef.current.getBoundingClientRect();
          const headerHeight = 50; // ajuste para a altura real da sua header
    
          // Ativa o modo escuro somente quando o topo do header está alinhado sobre a seção branca
          if (rect.top <= headerHeight && rect.bottom >= headerHeight) {
            setIsDark(true);
          } else {
            setIsDark(false);
          }
        }
      };
    
      useEffect(() => {
        // Usar IntersectionObserver apenas para detectar entrada na área de interseção
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              window.addEventListener('scroll', handleScroll);
            } else {
              window.removeEventListener('scroll', handleScroll);
              setIsDark(false); // Reseta quando sai da interseção
            }
          },
          { threshold: 0.1 } // Detecta entrada na área de interseção
        );
    
        if (whiteSectionRef.current) {
          observer.observe(whiteSectionRef.current);
        }
    
        return () => {
          if (whiteSectionRef.current) observer.unobserve(whiteSectionRef.current);
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
  
    return (
      <MainContext.Provider value={{ isDark, whiteSectionRef }}>
        {children}
      </MainContext.Provider>
    );
};
