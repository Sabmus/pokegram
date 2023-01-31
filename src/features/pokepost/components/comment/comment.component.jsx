import { useState } from "react";
import { CommentInput, FormComment } from "./comment.styles";

function Commment({ ...rest }) {
  const minHeigthButton = 18;
  const maxLenghtContentLine = 65;
  const [displayButton, setDisplayButton] = useState(false);
  const [heigthButton, setHeigthButton] = useState(minHeigthButton);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(event.target);
  };

  const onChangeHandler = (event) => {
    const contentLength = event.target.value.length;

    if (contentLength > 0) {
      setDisplayButton(true);
      if (contentLength % maxLenghtContentLine === 0) {
        setHeigthButton(
          minHeigthButton *
            (Math.floor(contentLength / maxLenghtContentLine) + 1)
        );
      }
    } else {
      setDisplayButton(false);
      setHeigthButton(minHeigthButton);
    }
  };

  return (
    <FormComment onSubmit={onSubmitHandler}>
      <CommentInput
        {...rest}
        onChange={onChangeHandler}
        style={{ height: `${heigthButton}px` }}
      />
      <button
        type="submit"
        style={{
          display: displayButton ? "block" : "none",
        }}
      >
        Publicar
      </button>
    </FormComment>
  );
}

export default Commment;
