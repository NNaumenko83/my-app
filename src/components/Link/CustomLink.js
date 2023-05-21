import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: "blue";
`;

export const CustomLink = ({ children, to }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};
