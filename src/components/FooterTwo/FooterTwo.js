import React from 'react';
import styled from 'styled-components';
import Git from '../../assets/images/github.svg'
import Twit from '../../assets/images/twitter.svg'
import cir from '../../assets/images/circle.svg';
import Light from '../../assets/images/light.PNG';


const FootMain = styled.div`
    background-color: #fafafa;
    width: 100%;
     display: flex;
    justify-content: space-evenly;
    padding-top: 43px;

        @media(max-width: 768px){
                flex-direction: column;
                height: 311px;
                padding-top: 8px;

        }
`;
const Footerone = styled.div`

h5{
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    color: #999;
    margin-top: 5px;
    font-weight: 100;
    padding-left: 76px;

    @media(max-width: 767px){
        position: absolute;
        margin-top: 170px;
        padding: 0px 12px;
   
    }
    @media(min-width: 768px) and (max-width: 1024px)
    {
        position: absolute;
        margin-top: 170px;
        padding: 0% 30%;
    }
}
img{
    position: relative;
    margin-left: -71px;

    @media(max-width: 768px){
        padding-left: 62px;
    }

}
`;

const Footertwo = styled.div`
display: flex;
gap: 10px;
width: 2%;

@media(max-width: 767px){
    width: 7%;
    position: relative;
    top: 95px;
    padding: 0% 45%;
}
@media(min-width: 768px) and (max-width: 1024px){
    width: 11%;
    position: relative;
    top: 95px;
    padding: 0% 44%;
img{
    width: 30%;
}

`;
const Footerthree = styled.div`

@media(max-width: 768px){
    position: relative;
    top: -90px;
}
`;

const LinkOne = styled.a`
    text-decoration: none;
    font-size: inherit;
    color: #0070F3;
    padding-left: 9px;

 `;
 const ButtonSize = styled.button`
 border: 1px solid #666;
 border-radius: 3px;
 background-color: #FFFFFF;
 height: 32px;
 color: #666666;
 width: 225px;
 margin-top: 32px;

 span{
     color: #000000;
     font-size: 14px;
     font-weight: 600;
 }
 img{
         width: 6%;

 }

 `;
const Footerfour = styled.div`

img{
    position: absolute;
    margin: 34px 0px 0px 8px;
    @media(max-width: 768px){
        z-index: 1;
        margin-top: -91px;
    }
}

select{
    height: 26px;
    width: 120px;
    margin-top: 32px;
    background-image:    url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA3klEQVRIS+3VMU9CMRTF8d8zBL+aizoQFhx0kUk33RzdYMNFXUFnYeGrYYyaJiUxJHDLSxodbNKpfeffc9/pbaPyaCrr+3OA++z4rtT5Pg5GuMnCY9yWQEoBE1xhlUUP8YDrCBIB0vojLvGO0yz4hm4JJAKcYYoPHGOZAUdYoIMBXrc5iQAHeMlzviFygj7O8dkWEJU4XI8chALRhn9AVKHf70VRTHu4wFfbmKZLNKt50dLBnna0imcMd/2I0phWa3Y/D1e1Xa9BCZJG0VuQNpaWKMx72xS1Fl5/WN3BN+AgJhnZQlq4AAAAAElFTkSuQmCC');
    background-position: calc(100% - .5rem), 100% 0;
    background-repeat: no-repeat;
    background-color: white;
    border: thin solid grey;
    border-radius: 4px;
    padding-left: 36px;
    background-size: 1.3em;
    display: inline-block;
    line-height: 1.5em;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;

    @media(max-width: 768px){
        position: relative;
        top: -125px;
    }

}
`;

 export function Footer2(){
    return <>
            <FootMain>
                <Footerone>
                <svg height="26" viewBox="0 0 284 65" fill="var(--geist-foreground)"><title>Vercel Logotype</title><path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"></path></svg>

                    {/* <img src={VercelLogo} alt="Vercel logo"></img> */}
                     <br />
                    <h5> Copyright © 2021 Vercel Inc. All rights reserved.</h5>
                </Footerone>
                <Footertwo>
                    <img src={Git} alt="Git logo"></img>
                    <img src={Twit} alt="Twit logo"></img>
                </Footertwo>
                <Footerthree>
                    <ButtonSize>
                        <span>Status : </span>
                         <img src={cir} alt="cir logo"></img>
                        <LinkOne href="">Systems normal</LinkOne>
                    </ButtonSize>
                </Footerthree>
                <Footerfour>
                <img src={Light} alt="Light logo"></img>
                    <select>
                        <option value="">Light</option>
                        <option value="">Dark</option>
                        <option value="">System</option>
                    </select>
                </Footerfour>
            </FootMain>
          </>
}
