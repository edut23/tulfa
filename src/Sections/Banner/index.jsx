import { useState } from "react"
import { MaterialSymbol } from "react-material-symbols"
import 'react-material-symbols/outlined'
import styled from "styled-components"
import video from "../../Assets/banner.mp4"

const BannerDiv = styled.div`
    position: relative;
    min-height: 80vh;
    overflow: hidden;
    margin-top: -1px;
`

const Video = styled.video`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    transform: translate(-50%, -50%);
    z-index: 0;
`


const SoundButton = styled.div`
    margin-top: 10px;
    color: #5B5B95;
    padding: 15px 8px 15px 8px;
    border: 1px solid #5B5B95;
    border-radius: 10px;
    display: flex;
    align-items: center;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    cursor: pointer;

    @media (max-width: 1024px) {
        margin-top: 5%;
    }

    @media (max-width: 600px) {
        margin-top: 12%;
    }

    p{
        margin: 0;
        margin-bottom: 2px;
    }
`

const ContentDiv = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 80vh;
    color: white;
    padding: 5%;
    text-align: center;

    &:hover ${SoundButton} {
        opacity: 1;
        transform: translateY(0);
    }
`


const Text = styled.p`
    background: linear-gradient(88.89deg, #A9A4F3 -1.41%, #FBFBF8 108.48%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: 'SF Pro Display';
    font-size: 2.75em;
    font-weight: 100;
    letter-spacing: 0.03em;
    text-align: left;
    width: 30%;
    margin: 0;

    @media (max-width: 1024px) {
        width: 50%;
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`

const Banner = () => {
    const [mute, setMute] = useState(true);

    return (
        <BannerDiv>
            <Video autoPlay muted={mute} playsInline loop src={video} >
                <source src={video} type="video/mp4"/>
            </Video>
            <ContentDiv>
                <SoundButton onClick={() => setMute(prevState => !prevState)}>
                    <MaterialSymbol icon="volume_up" />
                    <p>Sound on/off</p>
                </SoundButton>
                <Text>Create unrivalled shopping experiences for your consumers</Text>
            </ContentDiv>
        </BannerDiv>
    )
}
export default Banner