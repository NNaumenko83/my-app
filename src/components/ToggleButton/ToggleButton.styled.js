import styled from "styled-components";
export const Button = styled.button`
  background: ${({ theme }) => {
    console.log(theme);
    return theme.background;
  }};
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;

    // sun icon
    &:first-child {
      transform: ${({ themeTest }) => {
        console.log("themeTest:", themeTest);

        return themeTest === "light" ? "translateY(0)" : "translateY(100px)";
      }};
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ themeTest }) =>
        themeTest === "light" ? "translateY(-100px)" : "translateY(0)"};
    }
  }
`;
