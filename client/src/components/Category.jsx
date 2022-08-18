import {FaHamburger, FaPizzaSlice} from 'react-icons/fa';
import { GiChopsticks, GiFastNoodles} from 'react-icons/gi';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


import React from 'react'

function Category() {
  return (
    <div>
        <div>
           <FaPizzaSlice />
           <h4>Italian</h4> 

        </div>
        <div>
           <FaHamburger/>
           <h4>American</h4> 
           
        </div>
        <div>
           <GiFastNoodles />
           <h4>ThaiFood</h4> 
        
        </div>
        <div>
           <GiChopsticks />
           <h4>Chinese</h4> 
           
        </div>
    </div>
  )
}

const Link = styled.div`
display: flex;
justify content: center;

`;

export default Category