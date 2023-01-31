import { useState } from "react";

import Comment from "./components/comment/comment.component";

import { ReactComponent as Heart } from "../../assets/svg/heart.svg";
import { ReactComponent as HeartClicked } from "../../assets/svg/heartClicked.svg";
import { ReactComponent as MessageGlobe } from "../../assets/svg/messageGlobe.svg";
import { ReactComponent as MessageSend } from "../../assets/svg/messageSend.svg";

import {
  PostWrapper,
  PostHeader,
  PostContent,
  PostInteraction,
} from "./assets/styles";

function PokePost({ posts }) {
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
            {heartClicked ? (
              <HeartClicked className="interaction-heart-clicked" />
            ) : (
              <Heart className="interaction-svg" />
            )}
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
