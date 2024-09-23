import React from "react";
import styled from "styled-components";
import Hdata from "./Hdata";
import Button from "../Style/Button";
import { NavLink } from "react-router-dom";
const Hp = () => {
  return (
    <>
      <Wrapper className="section">
        <h2 className="heading">hp shop</h2>
        <section className="container grid grid-three-column">
          {Hdata.map(({ title, imgsrc, description }) => {
            return (
              <div className="card">
              <figure>
                <img src={imgsrc} alt={title} />
                </figure>
                <div card-data>
                <NavLink to="">
                <p>{description}</p>
                </NavLink>
                <NavLink to="">
                <Button className="btn">order now</Button>
                </NavLink>
                </div>
                </div>
            );
          })}
        </section>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;
  .container {
    max-width: 120rem;
    background-color: ${({ theme }) => theme.colors.bg};
  }
  .heading {
    margin-top: 6rem;
    font-size: 3.8rem;
    font-weight: 600;
    margin-bottom: 6rem;
    text-transform: capitalize;
  }
  .card{
      border: 0.1rem solid rgba(170 170 170/40%);

      .card-data{
        padding: 0 2rem;
      }

      p{
        align-content: justify;
        justify-content: center;
        margin: 2rem 0;
        font-weight: 300;
        font-size: 1.8rem;
        padding: 0 2rem;
      }

      .btn{
        margin: 2rem auto;
        background-color: rgba(0 0 0/0%);
        border: 0.1rem solid rgba(98 84 243);
        display: flex;
        justify-const: center;
        align-item: center;
        color:rgba(98 84 243);

        &:hover{
          background-color: rgba(98 84 243);
          color:#fff;

        }
      }
    }

  figure {
    width: auto;
    justify-content: center;
    position: relative;
    align-item: center;
    overflow: hidden;
    transition: all 0.5s linear;
    display: flex;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: %0;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      transition: all 0.2s linear;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
  }
  
  @media (max-width:${({ theme }) => theme.media.tab}){
    .container{
        padding: 0 3.2rem;
    }
    .grid-three-column{
        grid-template-columns: 1fr 1fr;
    }
}
@media (max-width:${({ theme }) => theme.media.mobile}){
    html{
        font-size: 50%;
    }
.grid{
    gap: 3.2rem;
}
.grid-two-coloum , .grid-three-column{
    grid-template-columns: 1fr;
}
}

`;

export default Hp;
