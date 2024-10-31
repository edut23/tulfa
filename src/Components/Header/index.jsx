import { MaterialSymbol } from "react-material-symbols";
import styled from "styled-components";
import { ReactComponent as Logo } from '../../Assets/Logo.svg' 
import { useContext } from "react";
import { MainContext } from "../../Context/MainContext";

const HeaderDiv = styled.div`
    position: fixed;
    top: 0;
    max-height: 100px;
    width: 100%;
    max-width: 100vw;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ isDark }) => (isDark ? '#000' : '#fff')};
    transition: color 0.3s ease;

    span{
        margin: 2% 0;
        margin-right: 10%;
    }

    svg {
        fill: ${({ isDark }) => (isDark ? '#000' : '#fff')};

        @media (max-width: 1024px) {
            width: 60%;
        }

        @media (max-width: 600px) {
            width: 90%;
        }
    }
`

const HeaderLogo = styled.div`
    width: 30%;
    height: 42px;
    margin: 2% 0;
    margin-left: 10%;
`

const Header = () => {
    const { isDark } = useContext(MainContext);

    return (
        <HeaderDiv isDark={isDark}>
            <HeaderLogo isDark={isDark}>
                <Logo/>
            </HeaderLogo>
            <MaterialSymbol icon="menu" size={42}/>
        </HeaderDiv>
    )
}

export default Header;