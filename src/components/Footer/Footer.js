import React from 'react';
import styled from 'styled-components';
// import { DeviceList} from '../responsive';
// import { useMediaQuery} from 'react-responsive';

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
    // const isMobile = useMediaQuery({maxWidth : DeviceList.mobile})

    return <>
            <FooterMain>
                <FooterOne>
                <h5>Frameworks</h5>
                   <ul>
                        <li><a href="www.google.com">Next.js</a></li>
                        <li><a href="www.google.com">Create React App</a></li>
                        <li><a href="www.google.com">Gatsby</a></li>
                        <li><a href="www.google.com">Nuxt.js</a></li>
                        <li><a href="www.google.com">Vue</a></li>
                         <li><a href="www.google.com">Angular</a></li>
                         <li><a href="www.google.com">More Frameworks</a></li>
                   </ul>
                </FooterOne>
                <FooterTwo>
                 <h5>Resources</h5>
                  <ul>
                        <li><a href="www.google.com">Documentation</a></li>
                        <li><a href="www.google.com">Experts</a></li>
                        <li><a href="www.google.com">Customers</a></li>
                        <li><a href="www.google.com">Guides</a></li>
                         <li><a href="www.google.com">Support</a></li>
                         <li><a href="www.google.com">API Reference</a></li>
                         <li><a href="www.google.com">OSS</a></li>
                          <li><a href="www.google.com">Command-Line</a></li>
                         <li><a href="www.google.com">Integrations</a></li>
                   </ul>
                </FooterTwo>
                <FooterThree>
                 <h5>Company</h5>
                 <ul>
                        <li><a href="www.google.com">Home</a></li>
                        <li><a href="www.google.com">Blog</a></li>
                        <li><a href="www.google.com">Changelog</a></li>
                        <li><a href="www.google.com">About</a></li>
                         <li><a href="www.google.com">Careers</a></li>
                         <li><a href="www.google.com">Pricing</a></li>
                         <li><a href="www.google.com">Security</a></li>
                          <li><a href="www.google.com">Next.js Conf</a></li>
                         <li><a href="www.google.com">Partners</a></li>
                         <li><a href="www.google.com">Contact Us</a></li>
                   </ul>
                </FooterThree>
                <FooterFour>
                 <h5>Legal</h5>
                 <ul>
                        <li><a href="www.google.com">Privacy Policy</a></li>
                        <li><a href="www.google.com">Terms of Service</a></li>
                        <li><a href="www.google.com">Trademark Policy</a></li>
                        <li><a href="www.google.com">Inactivity Policy</a></li>
                         <li><a href="www.google.com">DMCA Policy </a></li>
                         <li><a href="www.google.com">DPA</a></li>
                         <li><a href="www.google.com">SLA</a></li>
                   </ul>
                </FooterFour>
            </FooterMain>
          </>
}
