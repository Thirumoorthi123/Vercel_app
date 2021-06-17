import React from 'react';
import styled from 'styled-components';

const NavLinksContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
`;
const LinksWrapper = styled.ul`
    margin: 0;
    padding: 0;
    display:flex;
    list-style: none;    
`;
 const LinkItem = styled.li`
    height:100%;
    padding: 0 1.1em;
    color: #999;
    font-weight: 500;
    font-size: 14px;
    align-items:center;
    justify-content: center;
 `;

 const Link = styled.a`
    text-decoration: none;
    font-size: inherit;
    color: inherit;

 `;

export function NavLinks(props){
    return<NavLinksContainer>
            <LinksWrapper>
            <LinkItem><Link href="">Templates</Link></LinkItem>
            <LinkItem><Link href="">Analytics</Link></LinkItem>
            <LinkItem><Link href="">Pricing</Link></LinkItem>
            </LinksWrapper>
           </NavLinksContainer>

}