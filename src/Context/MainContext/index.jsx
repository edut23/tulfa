import React, { createContext, useState, useEffect, useRef } from 'react';

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const whiteSectionsRefs = useRef([]);

    const addWhiteSectionRef = (ref) => {
        if (ref && !whiteSectionsRefs.current.includes(ref)) {
            whiteSectionsRefs.current.push(ref);
        }
    };

    const handleScroll = () => {
        const headerHeight = 50;
        let isOverWhiteSection = false;

        whiteSectionsRefs.current.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= headerHeight && rect.bottom >= headerHeight) {
                isOverWhiteSection = true;
            }
        });

        setIsDark(isOverWhiteSection);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const isIntersecting = entries.some((entry) => entry.isIntersecting);
                if (isIntersecting) {
                    window.addEventListener('scroll', handleScroll);
                } else {
                    window.removeEventListener('scroll', handleScroll);
                    setIsDark(false);
                }
            },
            { threshold: 0.1 }
        );

        whiteSectionsRefs.current.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            whiteSectionsRefs.current.forEach((section) => observer.unobserve(section));
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <MainContext.Provider value={{ isDark, addWhiteSectionRef }}>
            {children}
        </MainContext.Provider>
    );
};
