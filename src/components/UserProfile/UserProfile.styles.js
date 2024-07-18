import styled from "styled-components";

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 215px;
`;

const UserCover = styled.div`
  width: 100%;
  height: 130px;
  position: relative;
`;

const UserCoverImage = styled.img`
  width: 100%;
  aspect-ratio: 4096 / 1302;
  border-radius: ${({ theme }) => theme.borderRadius.xlarge}
    ${({ theme }) => theme.borderRadius.xlarge} 0 0;
`;

const UserCoverText = styled.p`
  position: absolute;
  top: 85%;
  right: 2%;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-family: ${({ theme }) => theme.fonts.tertiary};
  opacity: 0.7;
`;

const UserAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30%;
  width: 140px;
  height: 140px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 100%;
`;

const UserAvatarImage = styled.img`
  width: 130px;
  aspect-ratio: 2160 / 2108;
  margin: ${({ theme }) => theme.spacing.medium};
  border-radius: 50%;
  top: 50%;
`;

export {
  UserAvatar,
  UserAvatarImage,
  UserContainer,
  UserCover,
  UserCoverImage,
  UserCoverText,
};