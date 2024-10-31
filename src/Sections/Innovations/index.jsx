import styled from "styled-components";
import section1 from "../../Assets/section1.mp4"
import section2 from "../../Assets/section2.mp4"
import section3 from "../../Assets/section3.png"
import section4 from "../../Assets/section4.mp4"

const InnovationsDiv = styled.div`
    background-color: #151568;
    padding: 0 200px;
    text-align: left;
    max-width: 100vw;
    

    @media (max-width: 1024px) {
        padding: 10%
    }

    @media (max-width: 600px) {
        padding: 5%;
        display: flex;
        flex-direction: column;
        text-align: center;
    }
`

const Section = styled.div`
    height: 40vh;
    padding: 60px 0;
    display: flex;
    gap: 50px;
    width: 100%;

    @media (max-width: 600px) {
        flex-direction: ${props => props.reverse === 'true' ? 'column-reverse' : 'column'};
        height: auto;
        justify-content: center;
        text-align: center;
        padding: 30px 0;
    }
`

const Content = styled.div`
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h2{
        font-family: SF Pro Display;
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.05em;
        color: #736DFA
    }

    h1{
        font-family: SF Pro Display;
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 0.035em;
    }

    p{ 
        font-family: SF Pro Display;
        font-size: 16px;
        font-weight: 300;
        letter-spacing: 0.035em;
    }
`

const Button = styled.button`
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #FF4729;
    font-family: SF Pro Display;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    border: none;
    width: fit-content;

    @media (max-width: 600px) {
        margin: 0 auto;
    }
`

const Video = styled.video`
    border-radius: 20px;
`

const Image = styled.img`
    border-radius: 20px;
    aspect-ratio: 16 / 9;
    object-fit: cover;
`

const Innovations = () => {
    return(
        <InnovationsDiv>
            <Section>
                <Content>
                    <h2>
                        Metaverse Content Production
                    </h2>
                    <h1>
                        InStore Immersive Activation
                    </h1>
                    <p>
                        Tulfa’s AR feature was tailor-made to suit both the venue and the audience. With the easy-to-operate touchscreen scan interface, we brought live-action bees to Kate Spade customers!
                    </p>
                    <Button>
                        LEARN MORE ABOUT AR
                    </Button>
                </Content>
                <Video controls>
                    <source src={section1} type="video/mp4"/>
                </Video>
            </Section>
            <Section reverse={'true'}>
                <Video controls>
                    <source src={section2} type="video/mp4"/>
                </Video>
                <Content>
                    <h2>
                        3D Model Creation
                    </h2>
                    <h1>
                        High-quality Product Renders
                    </h1>
                    <p>
                        The future of digital experiences is here. Tulfa's 3D Lab provides you with an instant metaverse strategy by creating 3D models and other assets to help you sell your products faster. We create and deploy 3D ﻿models that work across platforms.
                    </p>
                    <Button>
                        3D ASSETS CREATION
                    </Button>
                </Content>
            </Section>
            <Section>
                <Content>
                    <h2>
                        3D Model Creation
                    </h2>
                    <h1>
                        3D Product Configuration
                    </h1>
                    <p>
                        It enables for product customization in terms of colors, materials, textures, sizes, pricing, and other factors. 3D Product Configuration generates stunning real-time 3D product visualizations.
                    </p>
                    <Button>
                        3D PRODUCT CONFIGURATION
                    </Button>
                </Content>
                <Image src={section3} />
            </Section>
            <Section reverse={'true'}>
                <Video controls>
                    <source src={section4} type="video/mp4"/>
                </Video>
                <Content>
                    <h2>
                        Product Content
                    </h2>
                    <h1>
                        Enhanced Content that Converts
                    </h1>
                    <p>
                        We enhance your product listings and create digital experiences that transform your digital shelf. Check out our new video for a quick highlight of how we can help your eCommerce business succeed!
                    </p>
                    <Button>
                        LEARN MORE ABOUT ABOUT PRODUCT CONTENT
                    </Button>
                </Content>
            </Section>
        </InnovationsDiv>
    )
}

export default Innovations;