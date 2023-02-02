import styled from "styled-components";

const padding = "var(--spacing-1) var(--spacing-1)";

export const SearchBox = styled.div`
  padding: ${padding};
`;

export const InputBox = styled.div`
  padding: ${padding};
  border: 1px solid transparent;
  padding-bottom: 1rem;
  border-bottom-color: rgb(255 255 255 / 10%);

  input {
    height: 2.5rem;
    border-radius: 10px;
    outline: none;
    border: none;
    background-color: rgb(255 255 255 / 10%);
    width: 100%;
    padding-left: 1.5rem;
    padding-right: 0.7rem;
    color: var(--on-background);

    &:focus {
      padding-left: 0.8rem;
    }
  }
`;

export const LatestWrapper = styled.div`
  padding: ${padding};
  display: flex;
  flex-direction: column;
`;

export const LatestHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const LatestSearch = styled.div`
  display: flex;
  flex-direction: column;
`;
