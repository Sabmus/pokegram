import styled from "styled-components";

export const NavigationDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: var(--spacing-1) var(--spacing-xs);
  border-radius: var(--spacing-3);
  background-color: var(--background);
  overflow: hidden;
  height: 3.3rem;
  width: 100%;

  &:hover {
    cursor: pointer;
    background-color: rgb(255 255 255 / 5%);
    transition: background-color 0.35s;
  }
`;
