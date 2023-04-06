import styled from "styled-components";
export const Button = styled.button`
  background: ${({ theme }) => theme.background};
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.2rem;
  position: relative;
  width: 3.5rem;
  height: 2rem;

  svg {
    height: auto;
    width: 1.4rem;
    transition: all 0.3s linear;

    // sun icon
    &:first-child {
      transform: ${({ themeTest }) =>
        themeTest === "light" ? "translateY(0)" : "translateY(100px)"};
    }

    // moon icon
    &:nth-child(2) {
      transform: ${({ themeTest }) =>
        themeTest === "light" ? "translateY(-100px)" : "translateY(0)"};
    }
  }
`;
