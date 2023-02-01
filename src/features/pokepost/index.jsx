import { useState } from "react";

import Comment from "./components/comment/comment.component";

import { ReactComponent as MessageGlobe } from "../../assets/svg/messageGlobe.svg";
import { ReactComponent as MessageSend } from "../../assets/svg/messageSend.svg";

import SVG from "../../components/svg/svg.component";
import routes from "../../data/routes";

import {
  PostWrapper,
  PostHeader,
  PostContent,
  PostInteraction,
} from "./assets/styles";

function PokePost({ posts }) {
  const heartSvg = routes.find((item) => item.title === "Notificaciones");
  const [heartClicked, setHeartClicked] = useState(false);

  const onClickHeartHandler = () => {
    setHeartClicked(!heartClicked);
  };

  return (
    <PostWrapper>
      <PostHeader>
        <div>foto</div>
        <div className="user-header-time">user - 1 days ago</div>
        <div>...</div>
      </PostHeader>
      <PostContent>big ass image</PostContent>
      <PostInteraction>
        <div className="interactions">
          <span onClick={onClickHeartHandler}>
            <SVG
              path={heartClicked ? heartSvg.svgPathClicked : heartSvg.svgPath}
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
              className={`interaction-heart ${
                heartClicked ? "heart-pump" : ""
              }`}
            />
          </span>
          <MessageGlobe className="interaction-svg" />
          <MessageSend className="interaction-svg" />
        </div>
        <span>save</span>
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
      <div>
        <Comment placeholder="Añade un comentario..." />
      </div>
    </PostWrapper>
  );
}

export default PokePost;
