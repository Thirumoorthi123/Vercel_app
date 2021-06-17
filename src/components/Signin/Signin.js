import React from 'react';
import styled from 'styled-components';

const MobLoginButton = styled.div`
`;
const LinkOne = styled.a`
    text-decoration: none;
    font-size: inherit;
    color: inherit;

 `;
 const ButtonSize = styled.button`
 border: 1px solid #666;
 border-radius: 3px;
 background-color: #0070F3;
 height: 41px;
 color: #FFFFFF;
 width: 100%;
 margin-top: 15px;
 font-weight: 500;
 margin-bottom: 23px;

 `;
export function Signin(){
    return<MobLoginButton>
            <ButtonSize>
                    <LinkOne href="">Signin</LinkOne>
            </ButtonSize>
          </MobLoginButton>
}