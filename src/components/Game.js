import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';



const Game = ({name, released, image}) => {
  return (
    <>
    <GameStyle>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name}/>
    </GameStyle>
      </>
  )
}

const GameStyle = styled(motion.div)` 
min-height: 30vh;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
text-align: center;
border-radius: 1rem;
transition: all 0.1s ease-in;
cursor: pointer;

img{
  width: 100%;
  height: 40vh;
  object-fit: cover;
  padding: 0.5rem;
}

&:hover{
  transform: scale(1.1);
  background: black;
  h3, p {
    color: white;
  }
}



`
export default Game

