import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import { useParams,useLocation} from 'react-router-dom'; 
import db from '../Firebase';


const Details = ({route}) => {
  debugger;

  const[movie,setMovie]=useState();
  const location=useLocation();
  const {data}=location.state;
  console.log(data);

//   useEffect(()=>{
//     // grab the movie form db 
//     db.collection("movie")
//     .doc(data)
//     .get()
//     .then((doc)=>{
//       if(doc.exists){
//         // save the movie data
//         setMovie(doc.data());
//       }else{

//       }
//     })
// console.log("movies is", movie);

//   },[])
  return (
    <Container>
       <Background>
          <img src={data.backgroundImg} alt=""/>
       </Background>
       <ImgTitle>
        <img  alt="" src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"  />
       </ImgTitle>
       <Control>
        <PlayButton>
        <img src="/images/play-icon-black.png" alt=""/>
        <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
        <img src="/images/play-icon-white.png" alt=""/>
        <spam>TRAILER</spam>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
           <img src="/images/group-icon.png" alt=""/>
        </GroupWatchButton>
       </Control>
       <SubTitle>
          2018 . 7m . Family,Fantasy,Kids,Animation
       </SubTitle>
       <Description>
        {data.description}
       </Description>
    </Container>
  )
}
export default Details;
const Container=styled.div`
min-height:calc(100vh - 70px);
padding:0 calc(3.5vw + 5px);
position:relative;
`
const Background=styled.div`
${'' /* position:fixed; */}
top:0;
left:0;
bottom:0;
right:0;
z-index:-1;
opacity:0.8;
position:fixed;
img{
    width:100%;
    height:70vh;
    object-fit:cover;
}

`

const ImgTitle=styled.div`
height:30vh;
min-height:170px;
width:35vw;
min-width:200px;
margin-top:30px;

img{
  width:100%;
  height:100%;
  object-fit:contain;
}
`
const Control=styled.div`
display:flex;
align-items:center;

`

const PlayButton=styled.button`
border-radius:4px;
font-size:15px;
display:flex;
align-items:center;
height:56px;
background:rgb(249,249,249);
border:none;
padding:0px 24px;
margin-right:22px;
letter-spacing:1.8px;
cursor:pointer;

&:hover{
  background:rgb(198,198,198);
}

`
const TrailerButton=styled(PlayButton)`
background:rgb(0,0,0,0.3);
border:1px solid rgb(249,249,249);
color:rgb(249,249,249);

`
const AddButton=styled.button`
margin-right:16px;
width:44px;
height:44px;
display:flex;
align-items:center;
justify-content:center;
cursor:pointer;
border:2px solid white;
border-radius:50%;
background-color:rgba(0,0,0,0.6);

span{
  font-size:30px;
  color:white;
}
&:hover{
  background:rgb(198,198,198);
}
`
const GroupWatchButton=styled(AddButton)`
  background:rgb(0,0,0);
`

const SubTitle=styled.div`
color:rgb(249,249,249);
font-size:15px;
min-height:20px;
margin-top:20px;

`
const Description=styled.div`
line-height:1.4;
font-size:18px;
margin-top:16px;
max-width:800px;

`