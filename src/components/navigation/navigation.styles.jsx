import styled from "styled-components";

export const NavigationDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: var(--spacing-1) var(--spacing-xs);
  border-radius: var(--spacing-3);
  background-color: var(--background);

  &:hover {
    cursor: pointer;
    background-color: rgb(255 255 255 / 5%);
    transition: background-color 0.35s;
  }
`;
