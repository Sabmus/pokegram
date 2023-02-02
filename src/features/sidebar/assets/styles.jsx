import styled from "styled-components";

export const FixedSideWrapper = styled.div`
  display: flex;
  height: 100vh;
  position: fixed;
  z-index: 10;
  background-color: var(--background);
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  margin-left: 10px;
  height: 5rem;
  padding-top: 20px;
`;

export const NavSpan = styled.span`
  display: ${(props) => (props.didWidthChange === "true" ? "none" : "block")};
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 100;
  background-color: var(--background-color);
  border: 1px solid transparent;
  border-right-color: rgb(255 255 255 / 15%);
  padding: var(--spacing-1) var(--spacing-1);
  width: ${(props) => (props.didWidthChange === "true" ? "5rem" : "19rem")};
  transition: width 0.4s ease;

  ${NavigationWrapper} {
    flex-grow: 1;
  }

  @media screen and (max-width: 1300px) {
    width: 100%;

    ${NavSpan} {
      display: none;
    }
  }
`;

export const SideBarHiddenWrapper = styled.div`
  width: ${(props) => (props.didWidthChange === "true" ? "21rem" : "0px")};
  transition: ${(props) =>
    props.didWidthChange === "true"
      ? "width 0.1s linear 0.2s"
      : "width 0.4s ease"};
  overflow: hidden;

  * {
    display: ${(props) => (props.didWidthChange === "true" ? "block" : "none")};
  }
`;
