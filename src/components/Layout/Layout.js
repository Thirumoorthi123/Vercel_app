import React from 'react';
import styled from 'styled-components';
import { FormOne } from '../Form';

const LayoutContainer = styled.div `
  background-color : #fafafa;
  height: 100%;
 
//   span{
//     padding-left: 23px;
//     padding-top: 51px;
//     display: block;
//     width: 1px;
//     height: 1px;
//     min-width: 1px;
//     min-height: 1px;
//     @media (max-width: 768px)
//     {
//        display: none;
//     }

  }
`;

const MainContent = styled.div`
width: 1016px;  
max-width: 100%;
margin-left: auto;
margin-right: auto;
width: 1048px;
padding-left: 24px;
padding-right: 24px;
/* margin-top: auto; */
display: flex;
flex-direction: column;

@media (max-width: 768px){
       padding: 0;
}
`;

const ContantOne = styled.div`
display: flex;

h1{
    margin: 0;
    font-weight: 700;
    font-size: 50px;
    margin-top: 120px;

    @media(max-width: 768px){
        text-align: initial;
        padding-left: 26px;
        font-size: 27px;
        // position: relative;
        margin-top: 30px;
    }

}
`;

const ContantTwo = styled.div`
display: flex;

p{
    margin: 0;
    font-size: 22px;
    color: #666666;
    padding-top: 21px;

    @media(max-width: 768px){
        padding-top: 26px;
        text-align: initial;
        padding-left: 26px;
        font-size: 19px;
    }
}
`;

export function Layout(){
    return<LayoutContainer>
        {/* <span />
        <span /> */}
        <MainContent>
            <ContantOne>
            <h1> Contact Our Sales Team</h1>
            </ContantOne>
            <ContantTwo>
            <p>Tell us how we can help and we’ll get in touch shortly.</p>
            </ContantTwo>
        </MainContent>    
            <FormOne />
          </LayoutContainer>
}