import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-gap: 10px;
  justify-content: center;
  padding: 30px 0;
  background: rgb(6,28,37);
  @media screen and (max-width: 400px) {
   
  }
`;

export const Info = styled.p`
  color:  rgb(236,210,122);
  font-size: 1rem;
  margin: 2px 10px;
  background-color: transparent;
  line-height: 2rem;
  @media screen and (max-width: 400px) {
    margin-bottom: 20px;
    width: 100%;
  }
`;

export const InputEmail = styled.input `
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 0.9rem;
  /* max-width: 300px; */
  @media screen and (max-width: 400px) {
    margin: 10px 0;
    /* width: 95%; */
  }
`;

export const Button = styled.button `
  border: none;
  border-radius: 5px;
  padding: 10px;
  background: #E35D66;
  color: white;
  font-weight: bold;
  cursor: pointer;
  /* max-width: 300px; */
  width: 100%;
  @media screen and (max-width: 400px) {
    margin: 10px 0;
    padding: 15px;
    /* width: 100%; */
  }
`;