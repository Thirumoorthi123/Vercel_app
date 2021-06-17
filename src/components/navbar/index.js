import React from 'react';
import styled from 'styled-components';
import { Logo } from '../logo';
import { NavLinks } from './navLinks';
import { NavLinksOne } from './navLinksOne';
import { DeviceList} from '../responsive';
import { useMediaQuery} from 'react-responsive';
import {MobileNavLinks} from './mobNavLinks';

const NavBarContainer = styled.div`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 100%;
    backdrop-filter: saturate(180%) blur(5px);
    box-shadow: inset 0 -1px 0 0 rgba(0,0,0,0.1);
    background-color: hsla(0,0%,100%,0.8);
   
`;
const NavBarContainerSub = styled.div`
    width:1048px;
    height: 60px;
    display:flex;
    align-items: center;
    border-bottom: 0px inset;
    position: relative;

    @media (max-width: 768px)
    {
    //     position: fixed;
    // display: flex;
    // border-bottom: 1px inset;
    // background-color: hsla(0,0%,98%,0.8);
        padding-left: 13px;
        padding-right: 28px;
    top: -3px;
    width: 100%;
    }
`;
const SectionOne = styled.div`
    display:flex;
`;
const SectionTwo = styled.div`
    display:flex;
    flex: 2;
    height: 100%;
    justify-content: center;
`;
const SectionThree = styled.div`
    display:flex;
   
`;

export function NavBar(props){

    const isMobile = useMediaQuery({maxWidth : DeviceList.mobile})

    return<NavBarContainer>
            <NavBarContainerSub>
                    <SectionOne>
                        <Logo />
                    </SectionOne>
                    <SectionTwo> 
                    { !isMobile &&  <NavLinks />}
                    </SectionTwo>
                    <SectionThree>
                    {!isMobile && <NavLinksOne />} 
                    {isMobile && <MobileNavLinks/>}
                    </SectionThree>
             </NavBarContainerSub>        
          </NavBarContainer>

}