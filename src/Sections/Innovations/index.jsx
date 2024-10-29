import styled from "styled-components";
import section1 from "../../Assets/section1.mp4"

const InnovationsDiv = styled.div`
    background-color: #151568;
    padding: 0 200px;
`

const Section = styled.div`
    height: 40vh;
    padding: 60px 0;
    display: flex;
    gap: 50px;
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
        text-align: left;
        color: #736DFA
    }

    h1{
        font-family: SF Pro Display;
        font-size: 24px;
        font-weight: 600;
        letter-spacing: 0.035em;
        text-align: left;
    }

    p{ 
        font-family: SF Pro Display;
        font-size: 16px;
        font-weight: 300;
        letter-spacing: 0.035em;
        text-align: left;
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
    text-align: left;
    color: #FFFFFF;
    border: none;
    width: fit-content;
`

const Video = styled.video`
    border-radius: 20px;
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
                <Video autoPlay>
                    <source src={section1} type="video/mp4"/>
                </Video>
            </Section>
            <Section>
                <Video autoPlay>
                    <source src={section1} type="video/mp4"/>
                </Video>
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
            </Section>
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
                <Video autoPlay>
                    <source src={section1} type="video/mp4"/>
                </Video>
            </Section>
            <Section>
                <Video autoPlay>
                    <source src={section1} type="video/mp4"/>
                </Video>
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
            </Section>
        </InnovationsDiv>
    )
}

export default Innovations;