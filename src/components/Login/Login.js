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
 background-color: #FFFFFF;
 height: 40px;
 color: #666666;
 width: 100%;
 margin-top: 18px;

 `;
export function Login(){
    return<MobLoginButton>
            <ButtonSize>
                    <LinkOne href="">Login</LinkOne>
            </ButtonSize>
          </MobLoginButton>
}