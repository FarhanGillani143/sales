import React from 'react';
import styled from 'styled-components';
import Button from './Style/Button';
import { NavLink } from 'react-router-dom';

const Error = () => {
  return (
    <Wrapper>
            <img src="https://lh6.googleusercontent.com/Bu-pRqU_tWZV7O3rJ5nV1P6NjqFnnAs8kVLC5VGz_Kf7ws0nDUXoGTc7pP87tyUCfu8VyXi0YviIm7CxAISDr2lJSwWwXQxxz98qxVfMcKTJfLPqbcfhn-QEeOowjrlwX1LYDFJN" alt="error" />
   <NavLink to="/">
   <Button>Go back</Button>
</NavLink>
    </Wrapper>
  )
}
const Wrapper = styled.section`
padding: 9rem 0;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export default Error;