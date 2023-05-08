import React from 'react';
import styled from 'styled-components';
import { selectMovies } from '../features/movie/movieSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Movies = () => {
   
    const movies=useSelector(selectMovies);
    console.log("This is movies", movies);
  return (
    <Container>
        <h4>Recommended for you.</h4>
        <Content>
        {movies &&
        movies.map((movie)=>(
            <Wrap key={movie.id}>
                <Link to="/Details" state={{data:movie}}>
                <img src={movie.movie}/>
                </Link>
            </Wrap>
            
        ))

        }
           {/* <Wrap>
               <img  alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCPoHN6uFOmg_rcV7SaKpv3xIVAz8sum_HA&usqp=CAU"/>
           </Wrap>
           <Wrap>
               <img  alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCPoHN6uFOmg_rcV7SaKpv3xIVAz8sum_HA&usqp=CAU"/>
           </Wrap>
           <Wrap>
               <img  alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCPoHN6uFOmg_rcV7SaKpv3xIVAz8sum_HA&usqp=CAU"/>
           </Wrap>
           <Wrap>
               <img  alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCPoHN6uFOmg_rcV7SaKpv3xIVAz8sum_HA&usqp=CAU"/>
           </Wrap>
           <Wrap>
               <img  alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCPoHN6uFOmg_rcV7SaKpv3xIVAz8sum_HA&usqp=CAU"/>
           </Wrap>
           <Wrap>
               <img  alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCPoHN6uFOmg_rcV7SaKpv3xIVAz8sum_HA&usqp=CAU"/>
           </Wrap>
           <Wrap>
               <img  alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCPoHN6uFOmg_rcV7SaKpv3xIVAz8sum_HA&usqp=CAU"/>
           </Wrap> */}
        </Content>
    </Container>
  )
}

export default Movies; 

const Container=styled.div`
 ${'' /* margin-top:40px; */}
 
`

const Content=styled.div`
display:grid;
 grid-gap:25px;
 grid-template-columns:repeat(4, minmax(0,1fr));
`
const Wrap =styled.div`
cursor:pointer;
border:3px solid rgba(249,249, 249, 0.1);
border-radius:10px;
overflow:hidden;
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
                rgb(0 0 0 / 73%) 0px 16px -10px;
transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
img{
    width:100*%;
    ${'' /* height:100%; */}
    object-fit:cover;
}
&:hover{
    transform:scale(1.05);
    border:4px solid rgba(249, 249, 249,0.8);
    box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px,-10px;
}
`