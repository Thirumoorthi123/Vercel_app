import React from 'react';
import styled from 'styled-components';

const NavLinksOneContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;
const LinksOneWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display:flex;
    list-style: none;    
`;
 const LinksOneItem = styled.li`
    height:100%;
    padding: 0 1.1em;
    color: #999;
    font-weight: 500;
    font-size: 14px;
    align-items:center;
    justify-content: center;
 `;

 const LinkOne = styled.a`
    text-decoration: none;
    font-size: inherit;
    color: inherit;

 `;
 const ButtonSize = styled.button`
 border: 1px solid #666;
 border-radius: 6px;
 background-color: #000;
 height: 26px;
 color: #fff;

 &:hover{
    background-color: #fff;
    color: #000;
 }
 `;

export function  NavLinksOne(props){
    return<NavLinksOneContainer>
            <LinksOneWrapper>
            <LinksOneItem><LinkOne href="">Contact</LinkOne></LinksOneItem>
            <LinksOneItem><LinkOne href="">Login</LinkOne></LinksOneItem>
            <LinksOneItem>
            <ButtonSize>
                    <LinkOne href="">Signup</LinkOne>
            </ButtonSize>
            </LinksOneItem>
            </LinksOneWrapper>
           </NavLinksOneContainer>

}