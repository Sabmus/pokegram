export const minHeigthButton = 18;
export const maxLenghtContentLine = 65;

export const calculateHeight = (contentLength) => {
  if (contentLength % maxLenghtContentLine === 0) {
    return (
      minHeigthButton * (Math.floor(contentLength / maxLenghtContentLine) + 1)
    );
  }
};
