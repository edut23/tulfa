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
        margin-right: 75px;
    }

    svg {
        fill: ${({ isDark }) => (isDark ? '#000' : '#fff')};
    }
`

const HeaderLogo = styled.div`
    width: 30%;
    height: 42px;
    margin: 1.875em 4.6875em;
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