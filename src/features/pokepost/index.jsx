import { useState } from "react";

import Comment from "./components/comment/comment.component";

import SVG from "../../components/svg/svg.component";
import { svgObj } from "../../data/svg";

import {
  PostWrapper,
  PostHeader,
  PostContent,
  PostInteraction,
  PostComment,
} from "./assets/styles";

function PokePost({ posts }) {
  const { notification, comment, send, save, dots } = svgObj;
  const [heartClicked, setHeartClicked] = useState(false);

  const onClickHeartHandler = () => {
    setHeartClicked(!heartClicked);
  };

  return (
    <PostWrapper>
      <PostHeader>
        <div>foto</div>
        <div className="user-header-time">user - 1 days ago</div>
        <div>
          <SVG
            path={dots.svgChildren}
            color={"var(--on-background)"}
            fill={"var(--on-background)"}
            height="24"
            role="img"
            viewBox={"0 0 24 24"}
            width="24"
            className="interaction-svg"
          />
        </div>
      </PostHeader>
      <PostContent>big ass image</PostContent>
      <PostInteraction>
        <div className="interactions">
          <span onClick={onClickHeartHandler}>
            <SVG
              path={
                heartClicked
                  ? notification.svgChildrenClicked
                  : notification.svgChildren
              }
              color={
                heartClicked ? "var(--heart-clicked)" : "var(--on-background)"
              }
              fill={
                heartClicked ? "var(--heart-clicked)" : "var(--on-background)"
              }
              height="24"
              role="img"
              viewBox={heartClicked ? "0 0 48 48" : "0 0 24 24"}
              width="24"
              className={`interaction-svg${heartClicked ? " heart-pump" : ""}`}
            />
          </span>
          <SVG
            path={comment.svgChildren}
            color={"var(--on-background)"}
            fill={"var(--on-background)"}
            height="24"
            role="img"
            viewBox={"0 0 24 24"}
            width="24"
            className="interaction-svg"
          />
          <SVG
            path={send.svgChildren}
            color={"var(--on-background)"}
            fill={"var(--on-background)"}
            height="24"
            role="img"
            viewBox={"0 0 24 24"}
            width="24"
            className="interaction-svg"
          />
        </div>
        <SVG
          path={save.svgChildren}
          color={"var(--on-background)"}
          fill={"var(--on-background)"}
          height="24"
          role="img"
          viewBox={"0 0 24 24"}
          width="24"
          className="interaction-svg"
        />
      </PostInteraction>
      <div>
        <span>123 Me gusta</span>
        <div>
          lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala
          lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala
          lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala
          lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala
          lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala
          lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala
          lalala lalala lalala lalala lalala lalala lalala lalala lalala lalala
          lalala lalala
        </div>
      </div>
      <div>Ver los 233 comentarios</div>
      <PostComment>
        <Comment placeholder="Añade un comentario..." />
      </PostComment>
    </PostWrapper>
  );
}

export default PokePost;
