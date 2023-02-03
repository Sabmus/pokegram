import { useEffect, useRef } from "react";

const useClickOutside = (cb) => {
  const domNode = useRef();

  useEffect(() => {
    const handler = (event) => {
      console.log(domNode.current);
      if (!domNode.current.contains(event.target)) {
        cb();
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  });

  return domNode;
};

export default useClickOutside;
