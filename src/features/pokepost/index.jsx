import Comment from "./components/comment/comment.component";

import {
  PostWrapper,
  PostHeader,
  PostContent,
  PostInteraction,
} from "./assets/styles";

function PokePost({ posts }) {
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
          <span>heart</span>
          <span>msg</span>
          <span>send</span>
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
