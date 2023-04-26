import styled from "styled-components";

export const NewsCard = styled.li`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media screen and (min-width: 320px) {
    flex-basis: 100%;
  }
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 10px) / 2);
  }
  @media screen and (min-width: 1200px) {
    flex-basis: calc((100% - 2 * 10px) / 3);
  }
`;
