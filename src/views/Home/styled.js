import styled from "styled-components";
import backgroundImageBoxTitle from "../../assets/img/background.jpg"

export const BoxTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background-image: linear-gradient(to bottom, rgba(1,1,1, 0.1), rgba(6,28,37, 1)), url(${backgroundImageBoxTitle});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Title = styled.h1`
  color: rgb(236,210,122);
  text-align: center;
  font-size: 4rem;
  width: 100%;
  margin: 0;
  text-shadow: 1px 5px 4px rgba(1,1,1, 0.9);
`;