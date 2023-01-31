import styled from "styled-components";

export const FormComment = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  button {
    display: none;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    color: var(--on-background);

    &:hover {
      cursor: pointer;
      color: var(--secondary);
    }
  }
`;

export const CommentInput = styled.textarea`
  resize: none;
  color: var(--on-background);
  border: none;
  background-color: transparent;
  flex-grow: 1;
  height: 18px;
  max-height: 80px;
  padding-top: 1px;

  &:focus {
    outline: none;
  }
`;
