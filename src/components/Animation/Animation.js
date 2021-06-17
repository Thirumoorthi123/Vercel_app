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


const ImgFirst = styled.div`
    display: flex;
    width: 100%;
    text-align: center;

    @media(max-width: 768px){
        @-webkit-keyframes moveToLeft {
            from {left: 100%;}
            to {left: 0%;}
        }
        
        @keyframes moveToLeft {
            from {left: 100%;}
            to {left: 0%;}
        }
        
        
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-250px * 3));
            }
          }

          {
            animation: scroll 35s linear infinite;
            display: flex;
            gap: 39px;
            width: calc(250px * 6);
          }
          
    }

`;

const ImgSecond = styled.div`
display: flex;
width: 100%;
text-align: center;

@media(max-width: 768px){
    @-webkit-keyframes moveToLeft {
        from {left: 100%;}
        to {left: 0%;}
    }
    
    @keyframes moveToLeft {
        from {left: 100%;}
        to {left: 0%;}
    }
    
    
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(calc(-250px * 3));
        }
      }

      {
        animation: scroll 35s linear infinite;
        display: flex;
        gap: 39px;
        width: calc(250px * 6);
      }
      
}


`;

const ImgOne = styled.div`
img{
    width: 90%
}
`;

const ImgTwo = styled.div`
img{
    width: 90%
}
`;

const ImgThree = styled.div`
img{
    width: 90%
}
`;

const ImgFour = styled.div`
img{
    width: 90%
}
`;

const ImgFive = styled.div`
img{
    width: 50%
}
`;

const ImgSix = styled.div`
img{
    width: 50%
}
`;

const ImgSeven = styled.div`
img{
    width: 50%
}
`;

const ImgEight = styled.div`
img{
    width: 50%
}
`;

const ImgNine = styled.div`
img{
    width: 50%
}
`;

const ImgTen = styled.div`
img{
    width: 38%
}
`;


const ImgEleven = styled.div`
img{
    width: 90%
}
`;

const ImgTwel = styled.div`
img{
    width: 90%
}
`;

const ImgThirten = styled.div`
img{
    width: 90%
}
`;

const ImgFourten = styled.div`
img{
    width: 50%
}
`;

const ImgFiften = styled.div`
img{
    width: 80%
}
`;

const ImgSixten = styled.div`
img{
    width: 50%
}
`;
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
        margin-top: -65px;
        padding-left: 0px;
    }
}
`;



 export function Animation(){
     
    return <>
     <Imgtext>
                    <p>JOIN THE THOUSANDS OF INNOVATORS THAT<br /> ARE ALREADY BUILDING WITH VERCEL</p>
     </Imgtext> 
        <ImgFirst>
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
        </ImgFirst> 
        <ImgSecond>         
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
        </ImgSecond>  
           </>

}
