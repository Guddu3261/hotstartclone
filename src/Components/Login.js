import React from 'react';
import styled from 'styled-components';

const Login = () => {
  return (
    <Container>
        <CTA>
            <CtaLogoOne src="/images/cta-logo-one.svg" />
            <SignUp>Get All There</SignUp>
            <Description>
            © 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service
             marks of, and all related programming visuals and elements are the property of, Home Box Office, 
             Inc. All rights reserved.
            </Description>

            <CtaLogoTwo src="/images/cta-logo-two.png"/>
        </CTA>
    </Container>
  )
}

export default Login;

const Container=styled.div`
position:relative;
height:calc(100vh - 70px);
display:flex;
align-items:center;
justify-content:center;

&:before{
    position:absolute;
    content:"";
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:-1;
    background-image:url("/images/login-background.jpg");
    background-position:top;
    background-size:cover;
    background-repeat:no-repeat;
}
`
const CTA=styled.div`
max-width:650px;
padding:80px 40px;
width:90%;
display:flex;
flex-direction:column;
margin-top:100px;
`
const CtaLogoOne=styled.img`
`
const SignUp=styled.a`
width:90%;
background-color:#0063e5;
font-weight:bold;
padding:17px,0px;
color:#f9f9f9;
font-size:18px;
border-radius:4px;
text-align:center;
cursor:pointer;
transition:all 250ms;
letter-spacing:1.5px;
margin-top:10px;
margin-bottom:15px;
height:39px;
align-items:center;
padding-top:5px;

&:hover{
    background:#0483ee;
}

`
const Description=styled.p`
font-size:11px;
letter-spacing:1.5px;
text-align:center;
${'' /* line-height:1.5; */}

`

const CtaLogoTwo=styled.img`
width:90%;
margin-top:20px;
padding-left:30px;
`