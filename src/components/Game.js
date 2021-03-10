import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { loadDetail } from '../actions/detailAction';
import { Link } from 'react-router-dom';
import { smallImage } from '../util';
import { popup } from '../animations';


const Game = ({ name, released, image, id }) => {
  const stringPathId = id.toString()
  
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden';
    dispatch(loadDetail(id))
  }
  return (
    <>
      <GameStyle layoutId={stringPathId} onClick={loadDetailHandler} variants={popup} initial="hidden" animate="show" >
        <Link to={`/game/${id}`}>
          <motion.h3 layout={`title ${stringPathId}`}>{name}</motion.h3>
          <p>{released}</p>
          <motion.img
            layout={`image ${stringPathId}`}
            src={smallImage(image, 640)}
            alt={name} />
        </Link>
    </GameStyle>
      </>
  )
}

const GameStyle = styled(motion.div)` 
min-height: 30vh;
box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
text-align: center;
border-radius: 1rem;
cursor: pointer;
overflow: hidden;
transition: all 0.5s ease-in-out;
&:hover{
  background-color: black;
  transform: scale(1.4);
  p, h3{
    color: white;
  }
  
}

img{
  width: 100%;
  height: 40vh;
  object-fit: cover;
}
`
export default Game

