import styled from "styled-components";

const TechnologyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TechnologyHeader = styled.header`
  padding-bottom: ${({ theme }) => theme.padding.large};
  width: 100%;
`;

export {
  TechnologyHeader,
  TechnologyContainer,
};
