import { useEffect, useRef } from "react";

const useClickOutside = (cb) => {
  const domNode = useRef();
  console.log(domNode.current);

  useEffect(() => {
    const handler = (event) => {
      if (!domNode.current.contains(event.target)) {
        cb();
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [cb]);

  return domNode;
};

export default useClickOutside;
