import styled from "styled-components";

const CenteredLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.laptop};
  padding: 0 ${({ theme }) => theme.padding.large};

  @media (width <= ${({ theme }) => theme.breakpoints.mobile}) {
    /* gap: ${({ theme }) => theme.spacing.xlarge}; */
    padding: 0 ${({ theme }) => theme.padding.medium};
  }
`;

export { CenteredLayout, MainContainer };
