import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import {MenuToggle} from './menuToggle';
import {LoginOne} from '../Login';
import { SigninOne } from '../Signin';

const NavLinksContainer = styled.div`
    // height: 100%;
    display: flex;
    align-items: center;
`;
const LinksWrapper = styled.ul`
    height: 500px;
    display:flex;
    list-style: none;  
    background-color: #fff;
    width: 100%;
    flex-direction: column;
    position: fixed;
    top: 66px;
    left: 0;
    text-align: initial;
    padding-inline: 20px;
    overflow-y: scroll;
    box-sizing: border-box;
`;
 const LinkItem = styled.li`
 width: 88%;
 padding: 0;
 color: #000000;
 font-size: 1rem;
 border-bottom: 1px inset;
 line-height: 44px;
//  text-align: justify;
//  position: relative;
//  margin-left: 126px;

 `;

 const Link = styled.a`
    text-decoration: none;
    color: inherit;
     `;

export function MobileNavLinks(props){
    const [isOpen,setOpen] = useState(false)

    return<NavLinksContainer>
            <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
                {isOpen && 
                <LinksWrapper>
                <LoginOne />
                <SigninOne />
                    <LinkItem><Link href="">Templates</Link></LinkItem>
                    <LinkItem><Link href="">Analytics</Link></LinkItem>
                    <LinkItem><Link href="">Pricing</Link></LinkItem>
                    <LinkItem><Link href="">Contact</Link></LinkItem>
                    <LinkItem><Link href="">Documentation</Link></LinkItem>
                    <LinkItem><Link href="">Experts</Link></LinkItem>
                    <LinkItem><Link href="">Security</Link></LinkItem>
                    <LinkItem><Link href="">Blog</Link></LinkItem>
                    <LinkItem><Link href="">Careers</Link></LinkItem>
                    <LinkItem><Link href="">Security</Link></LinkItem>
                    <LinkItem><Link href="">Frameworks</Link></LinkItem>
                    <LinkItem><Link href="">Resource</Link></LinkItem>
                </LinksWrapper>}
           </NavLinksContainer>

}