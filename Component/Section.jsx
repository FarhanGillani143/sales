import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "../Style/Button";
const Section = (props) => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-data">
          <p className="top-data">This is lapi sales</p>
          <h1 className="heading">{props.name}</h1>
          <p align="justify" className="para">
            Welcome to <strong> Lapi sales</strong>. Online Computer store in
            Pakistan. Buy Dell, Lenovo, HP, Acer laptops at the best prices in
            Pakistan. YOU have taken Lapi sales from a simple business idea to a
            revolution in the heart of Pakistan’s Information Technology market.
            The idea behind the development of Lapi sales was never about
            creating a retailer with good prices.
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact">Order Now</NavLink>
          </Button>
        </div>
        <div className="section-img">
          <picture>
            <img src={props.image} alt="" className="img" />
          </picture>
        </div>
      </div>
      <div className="container content-area">
      <h3 className="head">Laptops</h3>
        <p align="justify" className="paragraph">
          As a result of technological advancements, various types of gadgets
          are available now, which positively contribute to the professional and
          personal lives of people. From smartphones to tablets, each device has
          unique features and use cases which make your life easier in different
          ways. The laptop is one of the most used devices across the world,
          which people use for different purposes. From business owners to
          students, coders to digital enthusiasts, IT professionals to teachers,
          gamers to content creators, people from all walks of life need to Buy
          Laptops for their operational activities. One of the most significant
          benefits of these devices is portability, as people buy them because
          it is easy to carry. It means if you are a student, you can easily
          take it with you to attend on-campus classes. On the other hand, if
          you are a business owner, you would like to have the most expensive
          machine because you need a powerful device that can fulfill your
          heavy-duty requirements. Also, you can carry it conveniently while
          traveling to attend business meetings. There are different features
          such as processor, battery, graphic card, SSD, display, design, ports,
          and many more. You need to consider all these when Buying a New Laptop
          Model. The performance of the device heavily depends on all these
          hardware specifications. Therefore, you must know how each component
          functions, so you can make the right buying decision according to your
          needs. In this guide, we will explore every technical aspect of a
          laptop in detail, which will provide you with a complete understanding
          of it.
        </p>
        <h3 className="head">HP</h3>
        <p align="justify" className="paragraph">
          HP is one of the best computing brands that offer some top-of-the-line
          models. They have got a huge variety of different devices with
          innovative designs and high-quality components which can address the
          unique computing needs of different users. Also, they have different
          series, including Victus, Omen, Pavilion, EliteBook, ProBook, Envy
          x360, Spectre x360, Chromebook, and the list goes on. Different models
          of this series address the concerns of users with high-end and low-end
          requirements, such as gamers, students, or any individual from
          different walks of life. Therefore, HP can provide you with great
          value for money. If you are based in Pakistan, then do complete
          research to find out the latest HP Laptop Price in Pakistan to create
          your budget accordingly.
        </p>
        <h3 className="head">DELL</h3>
        <p align="justify" className="paragraph">
          Dell is known for producing devices that have amazing build quality,
          high-level specifications, and appealing designs. From budget-friendly
          to expensive options, you can opt for anything as per your
          requirements. Some of the prominent aspects of their devices are
          long-lasting battery performance, high-performing processors, and
          quality displays. Additionally, they have also got top-notch GPUs that
          can provide you with satisfactory results for gaming, high-resolution
          videos, and other relevant activities. They offer a rich collection
          from different series, which includes Latitude, XPS, Inspiron, Vostro,
          Precision, Adamo, Alienware, and many more. They have also got a
          sub-series of the names which are mentioned. To get a reasonable Dell
          Laptop Price in Pakistan, you must find reliable retailers who can
          help you manage things within your budget.
        </p>
        <h3 className="head">LENOVO</h3>
        <p align="justify" className="paragraph">
          Another brand that is popular among users is Lenovo. From appealing
          design to powerful specifications, there are different reasons you
          should invest in their devices. They maintain the perfect balance
          between performance and design, which significantly impacts the
          overall user experience. You will also find their vast range of
          different series, which address the concerns of different types of
          users. It includes ThinkPad, IdeaPad, Legion, Yoga, ThinkBook, and
          many more. Each of these series contains models with different
          specifications. So, you may have to do little research to find out
          what can be the perfect fit as per your requirements. The Lenovo
          Laptop Price in Pakistan keeps changing continuously due to economic
          instability, so stay updated on the latest prices.
        </p>
        <h3 className="head">Apple</h3>
        <p align="justify" className="paragraph">
          Apple is one of the biggest names in the tech and computing world.
          Their products are totally different from other brands, and they use
          their own components. For example, they use their own processors,
          which include Apple M1, M2, Apple M1 Max, M2 Max, Apple M1 Ultra, and
          the list goes on. The same goes for other components as well, which
          makes their products unique and high-performing. Whether you want a
          high-powered machine to manage heavy workloads or just need something
          for regular use, Apple offers you the complete solution for
          everything. You should know that Apple devices are also expensive as
          compared to other brands. So, you need to have a sufficient budget to
          afford the Apple Laptop Price in Pakistan. Some of the best products
          include MacBook Pro, MacBook Air, Apple M1, and Mac Mini. Different
          variants are available for these series, so their specifications and
          features can vary.
        </p>
        <h3 className="head">Toshiba</h3>
        <p align="justify" className="paragraph">
          You just know that Toshiba does not make consumer-based machines
          anymore. However, there are still some devices that offer decent
          results for casual use and can be the perfect fit for entry-level
          users. Toshiba Satellite Radius 11, Portege PRT12U, and Tecra 15-inch
          are some of the mid-range devices which can be really helpful for your
          daily activities as they have a decent set of specifications. To
          ensure that the Toshiba Laptop price in Pakistan does not exceed your
          budget, you must have the price clarity of the local market.
        </p>
        <h3 className="head">Haier</h3>
        <p align="justify" className="paragraph">
          Haier is another brand that is not renowned as compared to other top
          companies, but it can still offer devices with decent interfaces,
          connectivity, and other useful features. Also, you will not find a
          massive range of Haier. But if you are a student who has to keep track
          of academic activities, a beginner who is just starting to use
          computing systems, or have other low-end needs, then you may opt for
          this brand. Since the brand is not well established, you will find
          affordable Haier Laptop Prices in Pakistan.
        </p>
        <h3 className="head">ACER</h3>
        <p align="justify" className="paragraph">
          Acer is known for producing machines that are well-suited for casual
          users and can positively contribute to your daily activities. However,
          if you want state-of-the-art features and powerful hardware
          configurations for high-end tasks, then you may opt for another
          option. Acer offers reliable and affordable laptops. If you have a
          limited budget and just something for regular use for research
          purposes, web browsing, writing, or any other low-end activity, then
          you must opt for this brand. They have also got different series that
          offer a good range for users, including Aspire, Nitro, Travelmate, and
          Predator. You have to do proper research to find out models from which
          series can be the right fit for you. It will also help you know the
          latest Acer Laptop Price in Pakistan.
        </p>
        <h3 className="head">Microsoft Surface</h3>
        <p align="justify" className="paragraph">
          The Microsoft Surface machines are well-suited for traditional users
          who do not have heavy-duty requirements. They also have 2-in-1 devices
          which provide flexibility to users of having a notebook or a typical
          machine. It ensures a great level of convenience and makes things
          easier to manage. The build quality of their devices is on the plus
          side as durable materials are used in manufacturing. Their displays
          also deliver a great immersive experience, and other components like
          touchpad, keyboard, and webcam also ensure satisfactory results.
          Microsoft Surface 4, 5, and Microsoft Surface Book are some of their
          best models which you may consider. To get quotes for their rates, you
          may visit your local market or search online. It will help you find
          decent Microsoft Surface prices in Pakistan, so in this way, managing
          the budget will be easier for you.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .section-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .btn {
    max-width: 16rem;
  }
  .top-data {
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
    text-transform: uppercase;
  }
  .heading {
    text-transform: uppercase;
    font-size: 6rem;
  }
  .para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
  .section-img {
    display: flex;
    justify-content: center;
    align-item: center;
  }
  picture {
    text-align: center;
  }
  .img {
    max-width: 100%;
    height: 100%;
  }
.head{
margin-top: 3rem;
font-size: 3.8rem;
font-weight: 300;
margin-bottom: 3rem;
text-transform: capitalize;
}
.paragraph {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 100%;
    background-color: ${({ theme }) => theme.colors.bg};
  }

`;

export default Section;
