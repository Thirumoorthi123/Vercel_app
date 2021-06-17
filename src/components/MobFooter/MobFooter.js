import React from 'react';
import styled from 'styled-components';
import plus from '../../assets/images/plus.svg';
import { useState } from 'react';
import plustwo from '../../assets/images/plustwo.svg';



const MobMainFooter = styled.div`
background-color: #fafafa;
height: 100%;
width: 100%;
    padding-top: 30px;
    line-height: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(min-width: 768px) and (max-width: 1024px)
    {
        width: 100%;
    }
}
`;
const MobOne = styled.div`

width: 277px;
border-bottom: 1px solid #999;
@media(min-width: 768px) and (max-width: 1024px)
{
   width: 90%;
}

h3{
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    margin-left: -200px;
    font-weight: 100;
    color: #000000;
    @media(min-width: 768px) and (max-width: 1024px)
    {
        margin-left: -600px;
    }
}
img{
    width: 8px;
    position: absolute;
    margin-top: -27px;
    padding-left: 100px;

    @media(min-width: 768px) and (max-width: 1024px)
    {
        padding-left: 318px;
    }
}
ul
{
    list-style: none;
    line-height: 33px;
    color: #999;
    text-align: initial;
    padding-left: 13px;
}
`;

const MobTwo = styled.div`
width: 277px;
border-bottom: 1px solid #999;
@media(min-width: 768px) and (max-width: 1024px)
{
   width: 90%;
}

h3{
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    margin-left: -200px;
    font-weight: 100;
    color: #000000;
    @media(min-width: 768px) and (max-width: 1024px)
    {
        margin-left: -610px;
    }
}
img{
    width: 8px;
    position: absolute;
    margin-top: -27px;
    padding-left: 100px;
    @media(min-width: 768px) and (max-width: 1024px)
    {
        padding-left: 318px;
    }
}
ul
{
    list-style: none;
    line-height: 33px;
    color: #999;
    text-align: initial;
    padding-left: 13px;
}
`;

const MobThree = styled.div`
width: 277px;
border-bottom: 1px solid #999;
@media(min-width: 768px) and (max-width: 1024px)
{
   width: 90%;
}
h3{
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    margin-left: -209px;
    font-weight: 100;
    color: #000000;
    @media(min-width: 768px) and (max-width: 1024px)
    {
        margin-left: -620px;
    }
}
img{
    width: 8px;
    position: absolute;
    margin-top: -27px;
    padding-left: 100px;
    @media(min-width: 768px) and (max-width: 1024px)
    {
        padding-left: 318px;
    }
}
ul
{
    list-style: none;
    line-height: 33px;
    color: #999;
    text-align: initial;
    padding-left: 13px;
}
`;

const MobFour = styled.div`
width: 277px;
border-bottom: 1px solid #999;
@media(min-width: 768px) and (max-width: 1024px)
{
   width: 90%;
}
h3{
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    margin-left: -230px;
    font-weight: 100;
    color: #000000;
    @media(min-width: 768px) and (max-width: 1024px)
    {
        margin-left: -640px;
    }
}
img{
    width: 8px;
    position: absolute;
    margin-top: -27px;
    padding-left: 100px;
    @media(min-width: 768px) and (max-width: 1024px)
    {
        padding-left: 318px;
    }
}
ul
{
    list-style: none;
    line-height: 33px;
    color: #999;
    text-align: initial;
    padding-left: 13px;
}
`;
export function MobFooter({ toggle}){
    const [isOpen,setOpen] = useState(false)
    const [resource,setResource] = useState(false)
    const [company,setCompany] = useState(false)
    const [legal,setLegal] = useState(false)

    return<>
        <MobMainFooter>
            <MobOne>
                <h3>Frameworks</h3>
                <img  src={plus}  alt="plus" onClick={()=> setOpen(!isOpen)} ></img>
                {isOpen && 
                 <ul>
                     <li>Next .js</li>
                     <li>Create React App</li>
                     <li>Gatsby</li>
                     <li>Nuxt .js</li>
                     <li>Vue</li>
                     <li>Angular</li>
                     <li>More Frameworks</li>
                 </ul>
                }
            </MobOne>
            <MobTwo>
            <h3>Resources</h3>
            <img  src={plustwo}  alt="plustwo" onClick={()=> setResource(!resource)}></img>
                {resource && 
                 <ul>
                     <li>Documentation</li>
                     <li>Experts</li>
                     <li>Customers</li>
                     <li>Guides</li>
                     <li>Support</li>
                     <li>API Reference</li>
                     <li>OSS</li>
                     <li>Command-Line</li>
                     <li>Integrations</li>
                 </ul>
                }
            </MobTwo>
            <MobThree>
            <h3>Company</h3>
            <img  src={plus}  alt="plus" onClick={()=> setCompany(!company)}></img>
            {company && 
                 <ul>
                     <li>Home</li>
                     <li>Blog</li>
                     <li>Changelog</li>
                     <li>About</li>
                     <li>Careers</li>
                     <li>Pricing</li>
                     <li>Security</li>
                     <li>Next.js Conf</li>
                     <li>Partners</li>
                     <li>Contact Us</li>
                 </ul>
                }
            </MobThree>
            <MobFour>
            <h3>Legal</h3>
            <img  src={plus}  alt="plus" onClick={()=> setLegal(!legal)}></img>
            {legal && 
                 <ul>
                     <li>Privacy Policy</li>
                     <li>Terms of Service</li>
                     <li>Trademark Policy</li>
                     <li>Inactivity Policy</li>
                     <li>DMCA Policy</li>
                     <li>DPA</li>
                     <li>SLA</li>
                 </ul>
                }
            </MobFour>
        </MobMainFooter>    
          </>
}