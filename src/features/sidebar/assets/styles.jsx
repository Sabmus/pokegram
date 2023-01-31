import styled from "styled-components";

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  margin-top: 25px;
  margin-bottom: 30px;
  margin-left: 10px;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 3;
  background-color: var(--background-color);
  border: 1px solid transparent;
  border-right-color: rgb(255 255 255 / 15%);
  width: 19rem;
  padding: var(--spacing-1) var(--spacing-1);

  ${NavigationWrapper} {
    flex-grow: 1;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;

    & .navigation-title,
    .header-title {
      display: none;
    }
  }
`;
