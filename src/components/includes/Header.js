import React from 'react'
import styled from "styled-components"
import "../../App.css"

function Header() {
    return (
        <>
        <MainContainer>
            <Left>
                <LogoImageContainer>
                    <LogoImage  src={require("../assets/images/moke.png").default} alt="Logo" />
                </LogoImageContainer>    
            </Left>
            <Right>
                <NavItems>
                    <NavItem>Get Signal</NavItem>
                    <NavItem>Support</NavItem>
                    <NavItem>Blog</NavItem>
                    <NavItem>developers</NavItem>
                    <NavItem>Careers</NavItem>
                    <NavItem>Donate</NavItem>
                    <NavItem>
                        <ImageContainer>
                            <TwitterImage src={require("../assets/images/twitter.png").default} alt="Twitter Image" />
                        </ImageContainer>
                    </NavItem>
                    <NavItem>
                    <ImageContainer>
                            <InstagramImage src={require("../assets/images/instagram.png").default} alt="Twitter Image" />
                        </ImageContainer>
                    </NavItem>
                </NavItems>
            </Right>
        </MainContainer>
        </>
    )
}
const MainContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 100px;
`;
const Left = styled.div`
    width: 30%;
`;
const LogoImageContainer = styled.div`
    width: 100px;
`;
const LogoImage = styled.img`
    width: 100%;
    display: block;
    cursor: pointer;
`;
const Right = styled.div`
    width: 50%;
`;
const NavItems = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const NavItem = styled.li`
    margin-right: 10px;
    font-size: 16px;
    font-weight: 600;
    &:last-child {
        margin-right: 0;
    }
    cursor: pointer;
`;
const ImageContainer = styled.div`
    width: 20px;
`;
const TwitterImage = styled.img`
    display: block;
`;
const InstagramImage = styled.img`
    display: block;
`;


export default Header
