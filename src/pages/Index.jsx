import { useEffect, useState } from "react";
import PokePost from "../features/pokepost/index";

import { getPostData } from "../services/postData";

function Index() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = () => {
      const allPosts = getPostData();
      setPosts(allPosts);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <PokePost posts={posts} />
      <PokePost posts={posts} />
    </>
  );
}

export default Index;
