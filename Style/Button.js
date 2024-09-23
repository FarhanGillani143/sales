import styled from "styled-components";
 const Button = styled.button`
 {
  align-items: center;
  background-color: rgb(98 84 243);
  border: none;
  border-radius: .25rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  box-sizing: border-box;
  color: rgb(255 255 255);
  cursor: pointer;
  display: inline-flex;
  font-family: 'Work Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  margin: 0;
  min-height: 3rem;
  padding: calc(.875rem - 1px) calc(1.5rem - 1px);
  position: relative;
  text-decoration: none;
  transition: all 250ms;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
  transform: capitalize;
 }

&:hover,
&:focus {
  background-color: #fb8332;
  box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
}

&:hover {
  background-color: #858585;
  transform: scale(0.96);
}

&:active {
  background-color: #f0deaa;
  box-shadow: rgba(0, 0, 0, .06) 0 2px 4px;
}
a{
    text-decoration: none;
    color:rgb(255 255 255);
    font-size: 1.8rem;
}

`;
export default Button;