import styled from "styled-components";

export const Box = styled.div`
  padding-bottom: 0;
  padding: 30px;
  background: black;
  position: bottom;
  bottom: 0;
  width: xl;

  @media (max-width: xl) {
    padding: 50px 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: ;
  margin: 0;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 10px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  align: "center";

  &:hover {
    color: red;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 34px;
  text-align: center;
  color: #fff;
  font-weight: bold;
`;
