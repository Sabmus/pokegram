import styled from "styled-components";

export const SideBarHiddenWrapper = styled.div`
  width: ${(props) => (props.didWidthChange ? "21rem" : "0px")};
  transition: ${(props) =>
    props.didWidthChange ? "width 0.1s linear 0.2s" : "width 0.4s ease"};
  overflow: hidden;

  * {
    visibility: ${(props) => (props.didWidthChange ? "visible" : "hidden")};
  }
`;

export const ExtraSidebarFrame = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background);
  height: 100vh;
  border: 1px solid transparent;
  border-right-color: rgb(255 255 255 / 10%);
`;
