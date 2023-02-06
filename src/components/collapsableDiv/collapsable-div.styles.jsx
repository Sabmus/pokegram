import styled from "styled-components";

export const Asd = styled.div.attrs((props) => {
  transition: `${props.transition} 0.25s easy`;
})`
  overflow: hidden;
  width: ${(props) => props.width || "0px"};
  height: ${(props) => props.height || "0px"};
  transition: ${(props) => props.transition};
`;

export const CollapsableWrapper = styled.div`
  overflow: hidden;
  width: ${(props) => props.width || "0px"};
  height: ${(props) => props.height || "0px"};
  transition: ${(props) => props.transition || "width"} 0.25s ease;
`;
