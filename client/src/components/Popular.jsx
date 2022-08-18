import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Popular() {

   const [populardish, setPopular] = useState([]); 

    useEffect(() => {
        getPopular();

    }, [] );

    const getPopular = async () => {

        const check = localStorage.getItem(`populardish`);

        if(check){
            setPopular(JSON.parse(check));
        }
        else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`);
            const data = await api.json();
            console.log(data);
            
            localStorage.setItem("populardish", JSON.stringify(data.recipes));
            setPopular(data.recipes);
        }

        
    }
  return (
    <div >
        return(
           <Wrapper>
            <h3>Popular dishes</h3>
            <Splide options={{
                perPage: 4,
                gap: '4rem',
                perMove: 2,
                arrows: false,
                padding: true,
                drag: "free"
            }}>
            {populardish.map((recipe) => {
                return(
                    <SplideSlide key={recipe.id}>
                    <Card>
                        <p>{recipe.title}</p>
                        <img src={recipe.image} alt={recipe.title} />
                        <Gradient />
                    </Card>
                    </SplideSlide>
                );
            })}
            </Splide>
           </Wrapper>
        );
    </div>
  )
}

const Wrapper = styled.div`
margin: 4rem 0rem;

`;

const Card = styled.div`
border-radius: 2rem;
overflow: hidden;
padding: 1rem;
margin: 20px;


img{
    border-radius: 2rem;

}

p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 700;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    alighn-items: center;
}

`;

const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0),rgba(0,0,0,0))

`;
export default Popular