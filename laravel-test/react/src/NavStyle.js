import {Link} from "react-router-dom";
import styled from "styled-components";

export const ButtonLink = styled(Link)`
  font-family: Arial, Helvetica, sans-serif;
  font-size: medium;
  background-color: #84A98C;
  border: none;
  color: #2F3E46;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition-duration: 0.4s;
  margin: 0;
  padding: 0;
  &:hover {
    transition-duration: 0.4s;
    background-color: #52796F;
    color: white;
  }
`;
export const StyledLink = styled(ButtonLink)`
  width: 12vw;
  padding-top: 2vh;
  padding-bottom: 2vh;
`;
export const MainLink = styled(Link)`
  font-family: Arial, Helvetica, sans-serif;
  font-size: medium;
  
  background-color: #52796F;
  color: #CAD2C5;
  
  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition-duration: 0.4s;
  width: 12vw;
  padding-top: 2vh;
  padding-bottom: 2vh;
  &:hover {
    transition-duration: 0.4s;
    background-color: #52796F;
    color: white;
}
`;