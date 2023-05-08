import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Movies from './Movies';
import Viewers from './Viewers';
import db from "../Firebase";
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';

const Home = () => { 
const dispatch=useDispatch();
useEffect(()=>{
  debugger;
  // console.log("Hello");
  
  db.collection("movie").onSnapshot((snapshot)=>{
    let tempMovies=snapshot.docs.map((doc)=>{
      console.log(doc.data());
      return{id:doc.id,...doc.data()}
     
    })
    
    console.log(tempMovies);
    dispatch(setMovies(tempMovies));
  })
},[]);
  return (
    <Container>
      <ImgSlider/>
      <Viewers/>
      <Movies/>
    </Container>
  )
}

export default Home;
const Container=styled.main`
     min-height:calc(100vh - 70px);
     padding:0 calc(3.5vw + 5px);
     overflow-x:hidden;
     &:before{
        background:url("/images/home-background.png");
        no-repeat:fixed;
        content:"";
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;
     }
`