import React from 'react';
import styled from 'styled-components';

const StartMain = styled.div`
    width: 100%;
    background-color: #000;
    height: 170px;
    display: flex;
    justify-content: space-around;
    padding-top: 75px;

    @media(max-width: 768px){
           flex-direction: column;
           height: 100%;
    }
`;

const StartLeft = styled.div`
h4{
    color: #fff;
    font-family: 'Inter', sans-serif;
    font-size: 3.5rem;
    font-weight: 800;
    margin-block-start: 0px;
}
p{
        color: #999;
    font-size: 19px;
    margin-left: -240px;
    font-family: 'Inter', sans-serif;
    margin-top: -76px;

     @media(max-width: 768px){
     margin-left: 0px;
     margin-top: -41px;
    }

`;

const StartRight = styled.div`
color: red;
`;
 const ButtonSize = styled.button`
     padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    background-color: #0070f3;
    color: #fff;
    border: 0px solid;
    // position: relative;
    margin-top: 30px;
    margin-left: 28px;
    width: 242px;
    border-radius: 10px;
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    cursor: pointer;
    height: 55px;

     @media(max-width: 768px){
        margin: 9px 0px 31px 1px;
    }
 `;
 const LinkOne = styled.a`
  text-decoration: none;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
 `;

 export function StartDeploying(){
    return <>
            <StartMain>
                <StartLeft>
                    <h4>Develop. Preview. Ship.</h4>
                    <p>The development platform for the best frontend teams.</p>
                </StartLeft>
                <StartRight>
                      <ButtonSize>
                        <LinkOne href="">Start Deploying</LinkOne>
                      </ButtonSize>
                </StartRight>
            </StartMain>
          </>
}