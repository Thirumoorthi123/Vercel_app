import React from 'react';
import styled from 'styled-components';
import hashicorp from '../../assets/images/hashicorp.svg';
import mcdonalds from '../../assets/images/mcdonalds.svg'
import facebook from '../../assets/images/facebook.svg';
import washingtonpost  from '../../assets/images/washingtonpost.svg';
import auth from '../../assets/images/auth0.svg'
import twilio from '../../assets/images/twilio.svg'
import uber from '../../assets/images/uber.svg'
import tripadvisor from '../../assets/images/tripadvisor.svg'
import patreon from '../../assets/images/patreon.svg'
import hulu from '../../assets/images/hulu.svg'
import scale from '../../assets/images/scale.svg'
import carhartt from '../../assets/images/carhartt.svg'
import barstool from '../../assets/images/barstool.svg'
import devolver from '../../assets/images/devolver.svg'
import harry from '../../assets/images/harry.svg'
import herman from '../../assets/images/herman.svg'




const Imgtext = styled.div`

p{
    font-size: 14px;
    text-align: center;
    color: #999999;
    letter-spacing: 0.1rem;
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    margin-bottom: 22px;
    margin-top: 67px;
    padding-left: 86px;

    @media(max-width: 768px)
    {
        // margin-top: -37px;
        margin: 0px;
        padding: 0px 12px
    }
}
`;
const ImgGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
width: 100%;
grid-gap: 45px;

 @media(max-width: 768px)
    {
        display: none;
    }
`;
const ImgOne = styled.div`
img{ 
    width: 50%;
    padding-left: 72px;
}
`;
const ImgTwo = styled.div``;
const ImgThree = styled.div`
    width: 68%;
    padding-left: 79px;

`;
const ImgFour = styled.div`
    width: 71%;
    padding-left: 34px;
`;
const ImgFive = styled.div`
width: 51%;
padding-left: 84px;
`;
const ImgSix = styled.div`
width: 49%;
padding-left: 34px;
`;
const ImgSeven = styled.div`
width: 33%;
padding-left: 107px;
`;
const ImgEight = styled.div`
width: 71%;
padding-left: 34px;
`;
const ImgNine= styled.div`
width: 49%;
padding-left: 92px;

`;
const ImgTen = styled.div`
width: 34%;
padding-left: 55px;

`;
const ImgEleven = styled.div`
width: 34%;
padding-left: 97px;

`;

const ImgTwel = styled.div`
width: 34%;
padding-left: 55px;

`;
const ImgThirten = styled.div`
width: 34%;
padding-left: 55px;

img{
    height: 43px;
    padding-left: 44px;
}

`;
const ImgFourten = styled.div`
width: 34%;
padding-left: 55px;

`;
const ImgFiften = styled.div`
width: 34%;
padding-left: 55px;

img{
    padding-left: 14px;
}

`;
const ImgSixten = styled.div`
width: 34%;
padding-left: 55px;

img{
    height: 36px;
}

`;


 export function Allimages(){
    return <>
            <Imgtext>
                    <p>JOIN THE THOUSANDS OF INNOVATORS THAT<br /> ARE ALREADY BUILDING WITH VERCEL</p>
            </Imgtext>        
            <ImgGrid>
                <ImgOne>
                <img  src={hashicorp}  alt="hashicorp"></img>
                </ImgOne>
                <ImgTwo>
                <img  src={mcdonalds}  alt="mcdonalds"></img>
                </ImgTwo>
                <ImgThree>
                <img  src={facebook}  alt="facebook"></img>
                </ImgThree>
                <ImgFour>
                <img  src={washingtonpost}  alt="washingtonpost"></img>
                </ImgFour>
                <ImgFive>
                <img  src={auth}  alt="auth"></img>
                </ImgFive>
                <ImgSix>
                <img  src={twilio}  alt="twilio"></img>
                </ImgSix>
                <ImgSeven>
                <img  src={uber}  alt="uber"></img>
                </ImgSeven>
                <ImgEight>
                <img  src={tripadvisor}  alt="tripadvisor"></img>
                </ImgEight>
                <ImgNine>
                <img  src={patreon}  alt="patreon"></img>
                </ImgNine>
                <ImgTen>
                <img  src={hulu}  alt="hulu"></img>
                </ImgTen>
                <ImgEleven>
                <img  src={scale}  alt="scale"></img>
                </ImgEleven>
                <ImgTwel>
                <img  src={carhartt}  alt="carhartt"></img>
                </ImgTwel>
                <ImgThirten>
                <img  src={barstool}  alt="barstool"></img>
                </ImgThirten>
                <ImgFourten>
                <img  src={devolver}  alt="devolver"></img>
                </ImgFourten>
                <ImgFiften>
                <img  src={harry}  alt="harry"></img>
                </ImgFiften>
                <ImgSixten>
                <img  src={herman}  alt="herman"></img>
                </ImgSixten>
            </ImgGrid>
           </>

}