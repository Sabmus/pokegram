import styled from "styled-components";

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
`;

export const OptionsWrapper = styled.div``;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 100;
  background-color: var(--background-color);
  width: 21rem;
  padding: var(--spacing-1) var(--spacing-1);

  ${NavigationWrapper} {
    flex-grow: 1;
  }
`;
