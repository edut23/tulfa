import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { MainContext } from "../../Context/MainContext";
import Options from "./Options";
import Content from "./Content";

const MenuDiv = styled.div`
    max-width: 100vw;
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    transform: ${({ menu }) => ( menu === 'true' ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
    z-index: 2;
    position: fixed;
    justify-content: flex-end;
    display: flex;
    flex-direction: row;
`

const Menu = () => {
    const { menu, page, setPage } = useContext(MainContext);
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        if(window.innerWidth < 600)
            setMobile(true);
        else
            setMobile(false);

    }, [window.innerWidth]);

    useEffect(() => {
        setPage(1)
    }, [menu]);

    return(
        <MenuDiv menu={menu.toString()}>
            {!mobile && <Content page={page} />}
            <Options mobile={mobile} page={page} setPage={setPage} />
        </MenuDiv>
    )
}

export default Menu;