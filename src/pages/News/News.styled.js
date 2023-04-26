import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  margin: 0 auto;
  min-width: 320px;
  height: 100%;
  align-items: center;
  padding: 15px 30px;
  background-color: ${(props) => props.theme.header};

  outline: 1px solid red;

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
