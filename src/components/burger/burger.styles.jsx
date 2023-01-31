import styled from "styled-components";

export const Burger = styled.label`
  position: relative;
  width: 22px;
  height: 18px;
  background: transparent;
  cursor: pointer;

  input {
    display: none;
  }

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: black;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-of-type(1) {
      top: 0px;
      transform-origin: left center;
    }

    &:nth-of-type(2) {
      top: 50%;
      transform: translateY(-50%);
      transform-origin: left center;
    }

    &:nth-of-type(3) {
      top: 100%;
      transform-origin: left center;
      transform: translateY(-100%);
    }
  }

  input:checked ~ span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 0px;
    left: 3px;
  }

  input:checked ~ span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }

  input:checked ~ span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 16px;
    left: 3px;
  }
`;
