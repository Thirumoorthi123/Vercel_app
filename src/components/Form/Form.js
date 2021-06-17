import React from "react";
import styled from 'styled-components';
import { Mainimage } from "../Allimages";
import { CheckboxMain } from "../Checkbox";
import { DeviceList} from '../responsive';
import { useMediaQuery} from 'react-responsive';
import { AnimationMain } from "../Animation";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';



const StyledFormWapper = styled.div`
// width: 1048px;
margin: auto;
display: flex;
flex-wrap: wrap;
padding-left: 147px;

    @media (max-width: 768px){
            margin: auto;
        width: 100%;
        flex-direction: column;
        padding-left: 0px;
    }

`;

const StyledForm = styled.div`
    display: flex;
    background: #fff;
    box-shadow: 0 30px 60px rgb(0 0 0 / 12%);
    border-radius: 12px;
    padding-left: -26px;
    margin-top: 31px;
    flex-direction: column;

    @media (max-width: 768px){
        flex-direction: column;
        margin-left: 17px;
        margin-right: 17px;
        align-items: flex-start;

    }
    p{
        font-size: 11px;
         position: absolute;
           padding-top: 2px;
         padding-left: 23px;
        color: #999999;
         font-weight: 500;

         @media (max-width: 768px){
            position: inherit;
            padding-right: 75px;
         }
       
       }
`;

const RightImgae = styled.div`
@media (max-width: 768px){

width: 100%;
height: 100%;
margin: auto;
overflow: hidden;
position: relative;
padding-top: 197px;
display: flex;
    flex-direction: column;
    gap: 33px;
}
`;

const StyledFormOne = styled.div`

padding: 24px;
flex-direction: column;
text-align: initial;
display: inline-flex;
flex-wrap: wrap;
gap: 25px;


@media (max-width: 768px){
    flex-direction: column;
    text-align: initial;
   
}

@media (max-width: 768px){
    display: flex;
    gap: 0px;
}
`;
const StyledFormTwo = styled.div`
padding: 24px;
flex-direction: column;
text-align: initial;
display: inline-flex;
flex-wrap: wrap;
gap: 25px;
padding-top: 1px;


@media (max-width: 768px){
    flex-direction: column;
    text-align: initial;
    display: flex;
    gap: 0;
}

`;

const StyledFormOneDateOne = styled.div`
display: flex;
flex-direction: column;

label{

    font-size: .75rem;
    font-weight: 500;
    color: #666;
    text-transform: uppercase;
    margin-bottom: 8px;
    max-width: 100%;
   
}
p {
    color: #bf1650;
    position: absolute;
    margin-top: 73px;
    font-size: 13px;
    @media(max-width: 768px){
        margin-top: 68px;
    }
  }
  
  p::before {
    display: inline;
    content: "⚠ ";
  }

`;

const StyledFormOneDatetwo = styled.div`
display: flex;
flex-direction: column;
p {
    color: #bf1650;
    position: absolute;
    margin-top: 73px;
    font-size: 13px;
    @media(max-width: 768px){
        margin-top: 88px;
    }
  }
  
  p::before {
    display: inline;
    content: "⚠ ";
  }

label{

    font-size: .75rem;
    font-weight: 500;
    color: #666;
    text-transform: uppercase;
    margin-bottom: 8px;
    max-width: 100%;


    @media(max-width: 768px){
        margin-top: 20px;
    }
}
`;

const StyledFormOneDataThree = styled.div`
display: flex;
flex-direction: column;
p {
    color: #bf1650;
    position: absolute;
    margin-top: 73px;
    font-size: 13px;
    @media(max-width: 768px){
        margin-top: 88px;
    }
  }
  
  p::before {
    display: inline;
    content: "⚠ ";
  }

label{

    font-size: .75rem;
    font-weight: 500;
    color: #666;
    text-transform: uppercase;
    margin-bottom: 8px;
    max-width: 100%;
    @media(max-width: 768px){
        margin-top: 14px;
    }
}
`;

const StyledFormOneDataFour = styled.div`
display: flex;
flex-direction: column;

label{

    font-size: .75rem;
    font-weight: 500;
    color: #666;
    text-transform: uppercase;
    margin-bottom: 8px;
    max-width: 100%;
    @media(max-width: 768px){
        margin-top: 12px;
    }
}

select{
    width: 220px;
    height: 36px;
    margin-top: 11px;
    border-radius: 5px;
    border: 1px solid #999;
    background-color: #fff;
}

`;

const StyledInput = styled.input`
width: 200px;
height: 33px;
margin-top: 12px;
padding: 0 12px;
border-radius: 5px;
border: 1px solid #999;
`;


const StyledButton = styled.button`
background-color: #fff;
color: #7928ca;
border: 0px solid;
border-radius: 10px;
cursor: pointer;
width: 169px;
font-size: 14px;
height: 40px;
border: 1px solid;
margin-top: 32px;
// position: relative;
font-family: 'Inter',sans-serif;
top: 24px;
margin-right: -15px;

@media(max-width: 768px){
    top: 15px;
    margin: auto;
    
}

`;

const StyledColor = styled.div`
    background-color: #7928ca;
    height: 96px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    margin-top: 24px;
    width: 100%;

    label{
        color: #fff;
        font-size: 15px;
        // position: relative;
        // left: -10px;
        top: 0px;
        
        @media(max-width: 768px)
        {
            left: 0px;
            // top: 17px;
            margin-top: 12px;
        }
    }

    a{
        color: #fff;
    text-decoration: none;
    }

    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        height: 124px;
        // margin-top: 40px;
        margin-left: 0px;
    }
`;
const HorizLine = styled.div`
border-bottom: 0px inset;
width: 92%;
padding-left: 23px;

@media(max-width: 768px){
    padding-left: 12px;
}
`;

const StyledTextArea = styled.textarea`
width: 90%;
height: 75px;
border: 1px solid #cbd5e0;
line-height: 1.25;
background-color: white;
padding: 0.65rem 0.75rem;
border-radius: 0.25rem;
box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 6%);
margin-top: 43px;
margin-left: 12px;
margin-right: 12px;


@media(max-width: 767px){
    width: 82%;
    margin-top: 0px;
}
@media(min-width: 768px) and (max-width: 1024px)
    {
        margin-top: 37px;
    }
`;

const BelowContent = styled.div`
    // padding-top: 42px;
p{
        color: #666666;
        @media(max-width: 768px)
        {
            // position: relative;
            margin-top: -330px;
            padding: 0px 4px;
        }
}
`;
const Styletext = styled.div`

h5{
    position: absolute;
    padding-left: 26px;
    margin-top: 9px;
    font-size: 11px;
    color: #999;
    font-weight: 500;
    @media(max-width: 767px){
        position: unset;
        padding-left: 0px;
    }
    @media(min-width: 768px) and (max-width: 1024px)
    {
    text-align: initial;
    padding-left: 15px;
    }

}
p {
    color: #bf1650;
    position: absolute;
    margin-top: 0px;
    font-size: 13px;
  }
  
  p::before {
    display: inline;
    content: "⚠ ";
  }
`;

// const input = styled.div``;

const Test = styled.div`
@media(min-width: 768px) and (max-width: 1024px)
{
    display: flex;
    justify-content: space-around;
}
`;


const SignupSchema = yup.object().shape({
    yourEmail:yup.string().email().required(),
    yourName: yup.string().required(),
    yourWebsite: yup.string().url().required(),
    yourComment:yup.string().min(4).max(255).required()
  });
export default function ContactForm() {
    const isMobile = useMediaQuery({maxWidth : DeviceList.mobile});
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(SignupSchema)
      });
      const onSubmit = (data) => {
        alert(JSON.stringify(data));
      };
        return(
            <StyledFormWapper >
                <StyledForm>
                <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
                    <Test>
                    <StyledFormOne>
                        <StyledFormOneDateOne>
                            <label htmlFor="email">Your Email</label>
                            <StyledInput {...register("yourEmail")} />
                            {errors.yourEmail && <p>{errors.yourEmail.message}</p>}
                        </StyledFormOneDateOne>  
                        <StyledFormOneDataThree>
                             <label htmlFor="name">Company Website</label>
                            <StyledInput {...register("yourWebsite")} />
                            {errors.yourWebsite && <p>{errors.yourWebsite.message}</p>}
                    </StyledFormOneDataThree> 
                    </StyledFormOne> 
                    <StyledFormTwo>
                    <StyledFormOneDatetwo>
                            <label htmlFor="name">Your Name</label>
                            <StyledInput {...register("yourName")} />
                            {errors.yourName && <p>{errors.yourName.message}</p>}
                        </StyledFormOneDatetwo>
                    <StyledFormOneDataFour>
                    <label htmlFor="name">COMPANY SIZE</label>
                        <select>
                                <option value=" ">1-100</option>
                                <option value=" ">100-500</option>       
                                <option value=" ">500-1000</option>
                                <option value=" ">1000+</option>
                        </select>
                    </StyledFormOneDataFour>
                    </StyledFormTwo>
                    </Test>       
                    <HorizLine >
                     <hr />
                    </HorizLine> 
                    <CheckboxMain />
                    <HorizLine >
                     <hr />
                    </HorizLine>
                    <Styletext>
                            <label htmlFor="text"><h5>HOW CAN WE HELP YOU</h5></label>
                            <StyledTextArea {...register("yourComment")} />
                            {errors.yourComment&& <p>{errors.yourComment.message}</p>}
                    </Styletext>        
                    <StyledColor>
                     <label htmlFor="">You can also email us directly at 
                     <a  href=" sales@vercel.com"> sales@vercel.com</a>
                    </label>
                    <StyledButton type="submit">Contact Sales</StyledButton>
                    </StyledColor>
                </form>
        </StyledForm>
              <RightImgae>
                {!isMobile && <Mainimage />} 
                {isMobile && <AnimationMain/>}
              </RightImgae>
              <BelowContent>
                  <p>By submitting this form, I confirm that I have read and understood the <br />
                    Vercel Privacy Statement.</p>
              </BelowContent>
            </StyledFormWapper>
        );
};

