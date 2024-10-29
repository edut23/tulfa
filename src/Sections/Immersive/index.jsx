import { useState, useEffect } from "react";
import styled from "styled-components";
import { ARItems } from "../../Assets/ARItems";
import ARProduct from "../../Components/ARProduct";

const ImmersiveDiv = styled.div`
    height: 100vh;
    background-color: #30288F;
    display: flex;
    align-items: center;
    flex-direction: column;
`

const ImmersiveText = styled.p`
    background: linear-gradient(#A29AFF, #FFC6BD);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'SF Pro Display';
    font-size: 2.75em;
    font-weight: 100;
    letter-spacing: 0.03em;
    padding-top: 100px;
    max-width: 60%;
    text-align: center;
`

const Products = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
    transition: transform 0.5s ease;
    transform: ${({ currentIndex }) => `translateX(-${currentIndex * 20}%)`};
`

const Immersive = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const duplicatedItems = [...ARItems, ...ARItems];

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (currentIndex === ARItems.length) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(0);
          }, 500);
        }
      }, [currentIndex]);

    return(
        <ImmersiveDiv>
            <ImmersiveText>
                Tulfa AR creates immersive and engaging eCommerce experiences
            </ImmersiveText>
            <Products currentIndex={currentIndex} style={{ transition: isTransitioning ? 'transform 0.5s ease' : 'none' }}>
                {duplicatedItems.map((item, index) => 
                    <ARProduct key={index} logo={item.logo} />
                )}
            </Products>
        </ImmersiveDiv>
    )
}

export default Immersive;