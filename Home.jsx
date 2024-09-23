import React from "react";
import Section from "./Component/Section";
import styled from "styled-components";

const Home = () => {
  const data = {
    name: "purchase with discount",
    image:"https://media.istockphoto.com/id/1128449812/vector/web-design-concept.jpg?s=612x612&w=0&k=20&c=2EFfFBEjFv7xTIFB8Zu88n74qDnjoUKG1-g2EnvjzuA=", 
  };
  return(
    <Wrapper>
          <Section {...data} />
          <section className="container grid grid-two-column">
        <div className="cards">
          <div className="card">
            <img src="https://www.paklap.pk/media/easybanner/Apple_MacBooks_2023.png.webp" alt="pic" className="card__img" />
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <img src="https://www.paklap.pk/media/easybanner/13th_Gen_Laptops.png.webp" alt="pic" className="card__img" />
          </div>
        </div>

</section>
    </Wrapper>
      
  ) 
  };

  const Wrapper = styled.section`
  .container{
    margin-top: 6rem;
    margin-bottom: 6rem;
    align: center;
  }
    .cards{
width: 100%;
height: auto;
  }
  .card{
margin: 6%;
background-color: #fff;
width: 21.25%;
border-radius: 12px;
float: left;
box-shadow: 0px 13px 10px -7px rgba(0, 0, 0, 0.1);
transition:all 0.4s cubic-bezier(0.175 , 0.885 ,0, 1)
  }
  .card:hover{
    box-shadow: 0px 30px 18px -8px rgba(0, 0, 0, 0.1);
    transform: scale(1.05, 1.05);
  }


  `;
export default Home;
