import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 2rem;
  position: relative;
  margin-top: 90px;
  &:before {
    content: '';
    width: 100px;
    height: 2px;
    background: #111;
    position: absolute;
    top: 40px;
  }
`;

export const Champions = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  list-style-type: none;
  margin: 50px;
  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`
export const Champion = styled.li`
  display: grid;
  transition: all .3s;
  &:hover {
    transform: scale(1.1)
  }
`;

export const ImageChampion = styled.img`
  max-width: 300px;
`;

export const NormalPrice = styled.p`
  font-size: 1rem;
  text-decoration: line-through;
  color: red;
  text-align: center;
`;
export const PromotionalPrice = styled.p`
   text-align: center;
   color: rgb(236,210,122);
   font-size: 1.5rem;
  font-weight: bold;
`;