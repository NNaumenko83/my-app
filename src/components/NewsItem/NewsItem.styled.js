import styled from "styled-components";

export const NewsCard = styled.li`
  position: relative;
  display: inline-block;

  border: 1px solid red;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    scale: 1.05;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }

  @media screen and (min-width: 320px) {
    flex-basis: 100%;
  }
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 20px) / 2);
  }
  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 2 * 20px) / 3);
  }
`;

export const NewsLink = styled.a`
  height: 100%;
`;
