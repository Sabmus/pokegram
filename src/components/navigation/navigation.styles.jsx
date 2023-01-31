import styled from "styled-components";

export const NavigationDiv = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
  padding: var(--spacing-sm);
  border-radius: var(--spacing-3);
  background-color: var(--background-color-alt);

  &:hover {
    filter: brightness(120%);
    transition: filter 0.7s;
  }
`;
