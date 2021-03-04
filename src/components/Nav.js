import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import logo from '../img/logo.svg';
//REDUX and ROUTES
import { fetchSearch } from '../actions/gamesAction';
import { useDispatch } from 'react-redux';
import { fadeIn } from '../animations';


const Nav = () => {
  const dispatch = useDispatch()
  const [textInput, setTextInput] = useState('')

  const inputHandler = (e) => {
    setTextInput(e.target.value)
  };

  const submitSearch = (e) => {
    e.preventDefault()
    dispatch(fetchSearch(textInput))
    setTextInput('')
  };

  const clearSearched = () => {
    dispatch({type: 'CLEAR_SEARCHED'})
  }

  return (
    <NavStyle variants={fadeIn} initial="hidden" animate="show">
        <Logo onClick={clearSearched} >
          <img src={logo} alt="logo" />
          <h1>Element</h1>
      </Logo>
      <form className="search" onSubmit={submitSearch}>
        <input value={textInput} type="text" onChange={inputHandler} />
        <button type="submit">search</button>
      </form>
    </NavStyle>
  )
}

const NavStyle = styled(motion.nav)` 
position: sticky;
padding: 3rem 5rem;
text-align: center;
/* justify-content: center; */
top: 0;
background: white;
input {
  width: 30%;
  font-size: 1.5rem;
  padding: 0.5rem;
  border: none;
  margin-top: 1rem;
  box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
  
}
button{
  font-size: 1.5rem;
  border: none;
  padding: 0.5rem 2rem;
  cursor: pointer;
  background: #ff7676;
  color: white;
}

`

const Logo = styled(motion.div)` 
display: flex;
justify-content: center;
padding: 1rem;
cursor: pointer;
img{
  height: 2rem;
  width: 2rem;
}

`


export default Nav
