import styled from "styled-components";

export const PostWrapper = styled.div`
  width: 100%;
  max-width: 530px;
  margin-top: 10px;
`;

export const PostHeader = styled.div`
  display: flex;

  & .user-header-time {
    flex-grow: 1;
    margin-left: 10px;
  }
`;

export const PostContent = styled.div`
  height: 600px;
  border: 1px solid rgb(255 255 255 / 10%);
  border-radius: 4px;
  margin-top: 10px;
`;

export const PostInteraction = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;

  & .interactions {
    display: flex;
    gap: 20px;

    .heart-pump {
      animation: beat 0.25s ease-in-out;
      transform-origin: center;
    }

    @keyframes beat {
      to {
        transform: scale(1.2);
      }
    }

    svg[class="interaction-svg"]:hover {
      cursor: pointer;
      fill: var(--on-background);
      opacity: 50%;
    }

    svg[class="interaction-heart"]:hover {
      cursor: pointer;
      fill: var(--heart-clicked);
      opacity: 100%;
    }
  }
`;
