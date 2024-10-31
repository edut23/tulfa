import { useContext, useRef, useEffect } from "react";
import styled from "styled-components";
import { MainContext } from "../../Context/MainContext";

const SolutionsDiv = styled.div`
    background-color: #F9FAFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;

    @media (max-width: 1024px) {
        padding: 10%;
    }

    @media (max-width: 600px) {
        padding: 5% 0;
    }
`

const SolutionsHeader = styled.div`
    text-align: center;
    margin-bottom: 68px;
`

const Title = styled.div`
    background: linear-gradient(271.02deg, #5345FF 7.47%, #FF3B1B 94.75%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'SF Pro Display';
    font-size: 2.75em;
    font-weight: 600;
    letter-spacing: 0.03em;
    margin-bottom: 10px;

    @media (max-width: 1024px) {
        font-size: 2em;
        padding: 0 5%;
    }

    @media (max-width: 600px) {
        font-size: 1.75em;
        padding: 0 5%;
    }
`

const SubTitle = styled.div`
    color: #312C8D;
    font-family: 'SF Pro Display';
    font-size: 1.125em;
    font-weight: 600;
    letter-spacing: 0.03em;

    @media (max-width: 1024px) {
        padding: 0 5%;
    }

    @media (max-width: 600px) {
        padding: 0 5%;
    }
`

const Grid = styled.div`
    display: grid;
    gap: 20px;
    width: -webkit-fill-available;
    justify-items: center;

    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`

const Item = styled.div`
    width: 360px;
    height: 360px;
    gap: 20px;
    display: grid;
`

const Image = styled.img`
    border-radius: 44px;
    width: 100%;
`

const ItemText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    text-align: left;
    align-items: center;
    color: #302C8C;
    
    p{
        font-family: SF Pro Display;
        font-size: 1.875em;
        font-weight: 600;
        letter-spacing: 0.035em;
        text-align: left;
        margin: 0;
    }
`

const Icon = styled.div`
    width: 35%;
    padding-right: 10px;
    height: auto;

    img{
        max-width: 75%;
        height: auto;

        @media (max-width: 1024px) {
            max-width: 85%
        }

        @media (max-width: 600px) {
            max-width: 90%;
        }
    }
`

const Solutions = () => {
    const sectionRef = useRef(null);
    const { addWhiteSectionRef } = useContext(MainContext);

    useEffect(() => {
        addWhiteSectionRef(sectionRef.current);
    }, [addWhiteSectionRef]);

    return (
        <SolutionsDiv ref={sectionRef}>
            <SolutionsHeader>
                <Title>
                    Discover our Solutions
                </Title>
                <SubTitle>
                    Scale your product content with the optimal solutions for e-commerce
                </SubTitle>
            </SolutionsHeader>
            <Grid>
                <Item>
                    <Image src="https://www.tulfa.com/wp-content/uploads/2023/04/metaverse.jpg" />
                    <ItemText>
                        <Icon>
                            <img src="https://www.tulfa.com/wp-content/uploads/2024/04/MetaverseContentP.png"/>
                        </Icon>
                        <p>
                            Metaverse <br/> Content <br/> Production
                        </p>
                    </ItemText>
                </Item>
                <Item>
                    <Image src="https://www.tulfa.com/wp-content/uploads/2023/04/Enhanced-brand-content.jpg" />
                    <ItemText>
                        <Icon>
                            <img src="https://www.tulfa.com/wp-content/uploads/2024/04/EBC-main.png"/>
                        </Icon>
                        <p>
                            Enhanced 
                            Brand <br/>Content
                        </p>
                    </ItemText>
                </Item>
                <Item>
                    <Image src="https://www.tulfa.com/wp-content/uploads/2023/04/catalog.jpg" />
                    <ItemText>
                        <Icon>
                            <img src="https://www.tulfa.com/wp-content/uploads/2024/04/catalog-m.png"/>
                        </Icon>
                        <p>
                            Catalog <br/> Management
                        </p>
                    </ItemText>
                </Item>
                <Item>
                    <Image src="https://www.tulfa.com/wp-content/uploads/2023/04/product-imagery-300x183.jpg" />
                    <ItemText>
                        <Icon>
                            <img src="https://www.tulfa.com/wp-content/uploads/2024/04/PI.png"/>
                        </Icon>
                        <p>
                            Product <br/> Imagery
                        </p>
                    </ItemText>
                </Item>
                <Item>
                    <Image src="https://www.tulfa.com/wp-content/uploads/2023/04/ARVIEWER-300x183.jpg" />
                    <ItemText>
                        <Icon>
                            <img src="https://www.tulfa.com/wp-content/uploads/2024/04/ARViewer.png"/>
                        </Icon>
                        <p>
                            AR <br/> Viewer
                        </p>
                    </ItemText>
                </Item>
                <Item>
                    <Image src="https://www.tulfa.com/wp-content/uploads/2023/04/omnichannel-commerce-300x183.jpg" />
                    <ItemText>
                        <Icon>
                            <img src="https://www.tulfa.com/wp-content/uploads/2024/04/omnicommerce.png"/>
                        </Icon>
                        <p>
                            Omnichannel <br/> Commerce
                        </p>
                    </ItemText>
                </Item>
            </Grid>
        </SolutionsDiv>
    )
}

export default Solutions;