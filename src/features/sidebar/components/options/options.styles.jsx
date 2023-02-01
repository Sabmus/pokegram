import styled from "styled-components";

export const OptionsWrapper = styled.div`
  position: fixed;
  bottom: 4.5rem;
  height: ${(props) => props.height};
  width: 17rem;
  overflow: "hidden";
  background-color: var(--secondary);
  color: var(--on-secondary);
  border-radius: 0.35rem;
  margin-bottom: 1rem;
  will-change: height;
  transition: height 0.12s ease-in-out;
  z-index: 1000;

  .not-show {
    display: none;
  }
  .show {
    display: "block";
  }
`;
