import React from 'react';
import styled from 'styled-components';
import icon1 from '../../assets/images/icon1.PNG';
import icon2 from '../../assets/images/icon2.PNG';
import icon3 from '../../assets/images/icon3.PNG';
import icon4 from '../../assets/images/icon4.PNG';
import icon5 from '../../assets/images/icon5.PNG';
import icon6 from '../../assets/images/icon6.PNG';
import icon7 from '../../assets/images/icon7.PNG';
import icon8 from '../../assets/images/icon8.PNG';



const CheckboxContainerOne = styled.div`
padding: 24px;
display: flex;
flex-wrap: wrap;
@media(min-width: 768px) and (max-width: 1024px)
{
    justify-content: space-around;
}
`;

// display: inline-flex;
//     flex-direction: row;
//     /* justify-content: space-between; */
//     margin-top: 56px;
//     flex-wrap: wrap;
//     gap: 144px;
//     position: relative;
//     margin-left: -149px;

const CheckboxTitle = styled.div`
color: #999999;
display: block;
font-weight: 500;
font-family: 'Inter', sans-serif;
margin-top: 17px;
text-align: initial;
padding-left: 31px;
font-size: 11px;
width: 100%;

@media(max-width: 767px){
    text-align: center;
    padding-left: 0px;
}
@media(min-width: 768px) and (max-width: 1024px)
{
    text-align: initial;
    padding-left: 15px;
}
`;

const CheckboxGroupOne = styled.div`
display: flex;
flex-direction: column;
line-height: 37px;
align-items: flex-start;

img{
    width: 30px;
    /* margin-top: 11px; */
    position: relative;
    top: 9px;
}
label{
    color: #999;
    display: flex;
    align-items: center;
    gap: 4px;
}

`;

const CheckboxGroupTwo = styled.div`
display: flex;
flex-direction: column;
line-height: 37px;
align-items: flex-start;
padding-left: 105px;

@media(max-width: 768px){
    padding-left: 0px;
}

img{
    width: 30px;
    position: relative;
    top: 9px;
}
label{
    color: #999;
    display: flex;
    align-items: center;
    gap: 4px;
}
`;
const Span = styled.span`
display: flex;
    gap: 7px;

svg{
color: rgb(255, 255, 255);
background-color: #7928ca;
width: 15px;
height: 23px;
border-radius: 100%;
padding: 0px 6px;
margin-top: 0px;
margin-top: 6px;
}

`;


    export function Checkbox(){
        return <>
                <CheckboxTitle>
                    PRODUCT(S) OF INTEREST
               </CheckboxTitle>
                    <CheckboxContainerOne>
                        <CheckboxGroupOne>
                        <label>
                        <input type="checkbox" name="example" value="Awesome" checked="" />
                        {/* <img  src={icon1}  alt="icon1"></img> */}
                        <Span>
                        <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" style={{color:'#fff'}}><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"></path></svg>
                         Vercel
                         </Span>
                        </label>
                        <label>
                        <input type="checkbox" name="example" value="Awesome" checked="" />
                        {/* <img  src={icon2}  alt="icon2"></img> */}
                        <Span>
                        <svg width="24" height="24" viewBox="0 0 24 24" ><path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" fill="transparent"></path><path d="M17.2414 20.3109C17.106 20.1444 16.3635 19.1902 15.4876 18.0573L13.7441 15.8025L11.5594 12.7072C10.3573 11.0054 9.36836 9.61383 9.35983 9.61383C9.35131 9.61179 9.34278 10.9871 9.33852 12.6664C9.33213 15.6067 9.32999 15.725 9.29163 15.7944C9.23621 15.8944 9.19359 15.9352 9.10407 15.9801C9.03586 16.0127 8.97618 16.0188 8.65434 16.0188H8.28561L8.18756 15.9597C8.12362 15.9209 8.07673 15.8699 8.04476 15.8107L8 15.7189L8.01066 7.5346L8.07673 7.45503C8.11083 7.41218 8.1833 7.35708 8.23445 7.33056C8.32184 7.28975 8.35594 7.28567 8.72468 7.28567C9.15948 7.28567 9.23195 7.30199 9.34491 7.42034C9.37689 7.45298 10.5598 9.15881 11.9751 11.2136C13.3903 13.2683 15.3256 16.0739 16.2762 17.4512L17.9437 19.8694C17.7365 20.0403 17.5005 20.1866 17.2414 20.3109Z" fill="#fff"></path><path d="M16.0567 7.28159C16.0269 7.18364 15.9437 7.08978 15.8414 7.04081C15.7711 7.00408 15.7157 7 15.4002 7C15.0656 7 15.0336 7.00408 14.9462 7.04693C14.8439 7.09998 14.7693 7.18976 14.7352 7.30403C14.7224 7.35096 14.7139 8.32018 14.7139 10.0444V12.7113L15.3917 13.7029L16.0674 14.6946L16.0737 11.0258C16.078 8.46913 16.0737 7.33464 16.0567 7.28159Z" fill="#fff"></path></svg>
                          Next.js
                         </Span>
                        </label>
                        <label>
                        <input type="checkbox" name="example" value="Awesome" checked="" />
                        {/* <img  src={icon3}  alt="icon3"></img> */}
                        <Span>
                        <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" style={{color:'#fff'}}><circle cx="12" cy="12" r="10"></circle><path d="M2 12h20"></path><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path></svg>
                        Edge Network
                        </Span>
                        </label>
                        <label>
                        <input type="checkbox" name="example" value="Awesome" checked="" />
                        {/* <img  src={icon4}  alt="icon4"></img> */}
                        <Span>
                        <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" style={{color:'#fff'}}><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 012 2v7"></path><path d="M6 9v12"></path></svg>
                        </Span>
                        Git Solutions
                        </label>
                        </CheckboxGroupOne>
                        <CheckboxGroupTwo>
                        <label>
                        <input type="checkbox" name="example" value="Awesome" checked="" />
                        {/* <img  src={icon5}  alt="icon5"></img> */}
                        <Span>
                        <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" style={{color:'#fff'}}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                        </Span>
                        Preview Deployments
                        </label>
                        <label>
                        <input type="checkbox" name="example" value="Awesome" checked="" />
                        {/* <img  src={icon6}  alt="icon6"></img> */}
                        <Span>
                        <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" style={{color:'#fff'}}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0110 0v4"></path></svg>
                        </Span>
                        Built in free SSL
                        </label>
                        <label>
                        <input type="checkbox" name="example" value="Awesome" checked="" />
                        {/* <img  src={icon7}  alt="icon7"></img> */}
                        <Span>
                        <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" style={{color:'#fff'}}><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>   
                        </Span>
                        Integrations
                        </label>
                        <label>
                        <input type="checkbox" name="example" value="Awesome" checked="" />
                        {/* <img  src={icon8} alt="icon8"></img> */}
                        <Span>
                        <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision" style={{color:'#fff'}}><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                        </Span>
                        Analytics / RES
                        </label>
                        </CheckboxGroupTwo>
                    </CheckboxContainerOne>    
             </>
    }


 


    