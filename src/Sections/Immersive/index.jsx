import { useState, useEffect } from "react";
import styled from "styled-components";
import { ARItems } from "../../Assets/ARItems";
import ARProduct from "../../Components/ARProduct";

const ImmersiveDiv = styled.div`
    background-color: #30288F;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    padding: 60px;

    @media (max-width: 1024px) {
        padding: 0 10%;
    }

    @media (max-width: 600px) {
        padding: 0 5%;
    }
`

const ImmersiveText = styled.p`
    background: linear-gradient(#A29AFF, #FFC6BD);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'SF Pro Display';
    font-size: 2.75em;
    font-weight: 600;
    letter-spacing: 0.03em;
    padding-top: 100px;
    max-width: 50%;
    text-align: center;
    margin-bottom: 70px;

    @media (max-width: 1024px) {
        font-size: 2em;
        max-width: 70%;
    }

    @media (max-width: 600px) {
        font-size: 1.5em;
        max-width: 90%;
    }
`

const ProductsWrapper = styled.div`
    max-width: 1600px;
    width: 1600px;
    margin-bottom: 164px;
    overflow: hidden;
`

const Products = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    transition: transform 0.5s ease;
    transform: ${({ currentIndex }) => `translateX(-${currentIndex * 20}%)`};
    box-sizing: border-box;
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
            <ProductsWrapper>
                <Products currentIndex={currentIndex} style={{ transition: isTransitioning ? 'transform 0.5s ease' : 'none' }}>
                    {duplicatedItems.map((item, index) => 
                        <ARProduct key={index} logo={item.logo} />
                    )}
                </Products>
            </ProductsWrapper>
        </ImmersiveDiv>
    )
}

export default Immersive;