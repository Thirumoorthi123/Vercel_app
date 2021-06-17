import React from 'react';
import styled from 'styled-components';
import { DeviceList} from '../responsive';
import { useMediaQuery} from 'react-responsive';

const FooterMain = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-evenly;
        background-color: #fafafa;
    height: 100%;

    @media(max-width: 768px){
        flex-direction: column;
    }
`;


const FooterOne = styled.div`
h5{
    // @media(max-width: 768px){
    //     text-align: start;
    // padding-left: 21px;
    // font-size: 14px;
    // border-bottom: 1px solid #eaeaea;
    // }  
}
ul{
    list-style: none;
    line-height: 33px;
    text-align: initial;

    // @media(max-width: 768px){
    //     display :none;
    // }
}
a{
    text-decoration: none;
    color: #999;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
}

`;
const FooterTwo = styled.div`
ul{
    list-style: none;
    line-height: 33px;
    text-align: initial;
}
a{
    text-decoration: none;
    color: #999;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
}
`;
const FooterThree = styled.div`
ul{
    list-style: none;
    line-height: 33px;
    text-align: initial;
}
a{
    text-decoration: none;
    color: #999;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
}
`;
const FooterFour = styled.div`
ul{
    list-style: none;
    line-height: 33px;
    text-align: initial;
}
a{
    text-decoration: none;
    color: #999;
    font-size: 14px;
    font-family: 'Inter', sans-serif;
}
`;


 export function Footer(){
    const isMobile = useMediaQuery({maxWidth : DeviceList.mobile})

    return <>
            <FooterMain>
                <FooterOne>
                <h5>Frameworks</h5>
                   <ul>
                        <li><a href="">Next.js</a></li>
                        <li><a href="">Create React App</a></li>
                        <li><a href="">Gatsby</a></li>
                        <li><a href="">Nuxt.js</a></li>
                         <li><a href="">Vue</a></li>
                         <li><a href="">Angular</a></li>
                         <li><a href="">More Frameworks</a></li>
                   </ul>
                </FooterOne>
                <FooterTwo>
                 <h5>Resources</h5>
                  <ul>
                        <li><a href="">Documentation</a></li>
                        <li><a href="">Experts</a></li>
                        <li><a href="">Customers</a></li>
                        <li><a href="">Guides</a></li>
                         <li><a href="">Support</a></li>
                         <li><a href="">API Reference</a></li>
                         <li><a href="">OSS</a></li>
                          <li><a href="">Command-Line</a></li>
                         <li><a href="">Integrations</a></li>
                   </ul>
                </FooterTwo>
                <FooterThree>
                 <h5>Company</h5>
                 <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Changelog</a></li>
                        <li><a href="">About</a></li>
                         <li><a href="">Careers</a></li>
                         <li><a href="">Pricing</a></li>
                         <li><a href="">Security</a></li>
                          <li><a href="">Next.js Conf</a></li>
                         <li><a href="">Partners</a></li>
                         <li><a href="">Contact Us</a></li>
                   </ul>
                </FooterThree>
                <FooterFour>
                 <h5>Legal</h5>
                 <ul>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms of Service</a></li>
                        <li><a href="">Trademark Policy</a></li>
                        <li><a href="">Inactivity Policy</a></li>
                         <li><a href="">DMCA Policy </a></li>
                         <li><a href="">DPA</a></li>
                         <li><a href="">SLA</a></li>
                   </ul>
                </FooterFour>
            </FooterMain>
          </>
}
