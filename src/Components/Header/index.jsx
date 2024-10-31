import { MaterialSymbol } from "react-material-symbols";
import styled from "styled-components";
import { ReactComponent as Logo } from '../../Assets/Logo.svg' 
import { ReactComponent as Logo2 } from '../../Assets/Logo2.svg' 
import { useContext } from "react";
import { MainContext } from "../../Context/MainContext";

const HeaderDiv = styled.div`
    position: fixed;
    top: 0;
    max-height: 100px;
    width: 100%;
    max-width: 100vw;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ isDark }) => (isDark ? '#000' : '#fff')};
    transition: color 0.3s ease;

    .material-symbols{  
        background-color: #00000000;
        border: none;
        color: ${({ isDark, menuOpen }) => ((isDark || menuOpen ) ? '#000' : '#fff')};
    }

    button{
        margin: 2% 0;
        margin-right: 3%;

        @media (max-width: 600px) {
            margin: 4% 0;
            margin-right: 3%;
        }
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
    margin-left: 3%;
`

const Header = () => {
    const { isDark, menu, setMenu, page } = useContext(MainContext);

    return (
        <HeaderDiv isDark={isDark} menuOpen={menu}>
            <HeaderLogo isDark={isDark} >
                {(menu && page === 1) ? <Logo2/> : <Logo/>} 
            </HeaderLogo>
            <MaterialSymbol icon={menu ? "close" : "menu"} size={42} onClick={() => setMenu(prevState => !prevState)}/>
        </HeaderDiv>
    )
}

export default Header;