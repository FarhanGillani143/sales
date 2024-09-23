import React from "react";
import Section from "./Component/Section";
import styled from "styled-components";
import Hp from "./Component/Hp";
import Dell from "./Component/Dell";
import Lenovo from "./Component/Lenovo";
const Shop = () => {
  const data = {
    name: "Sale and Purchase",
    image:
      "https://media.istockphoto.com/id/943117712/vector/online-library-and-knowledge.jpg?s=612x612&w=0&k=20&c=YuTuZLTAqtxkEHTRBqKTbSG4ss8VU-2mXRrx5dK7z3s=",
  };
  return (
    <>
      <Wrapper>
        <Section {...data} />
        <section className="container grid grid-three-column">
          <div className="cards">
            <div className="card">
              <img
                src="https://www.paklap.pk/media/easybanner/Apple_MacBooks_2023.png.webp"
                alt="pic"
                className="card__img"
              />
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <img
                src="https://www.paklap.pk/media/easybanner/13th_Gen_Laptops.png.webp"
                alt="pic"
                className="card__img"
              />
            </div>
          </div>
        </section>
      </Wrapper>
      <Hp />
      <Dell />
      <Lenovo />
    </>
  );
};
const Wrapper = styled.section`
  .container {
  }
  .cards {
    width: 100%;
    height: auto;
  }
  .card {
    margin: 6%;
    background-color: #fff;
    width: 21.25%;
    border-radius: 12px;
    float: left;
    box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0, 1);
  }
  .card:hover {
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.05, 1.05);
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .container {
      padding: 0 3.2rem;
    }
    .grid-three-column{
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column{
      grid-template-columns: 1fr;
    }
  }
`;

export default Shop;
