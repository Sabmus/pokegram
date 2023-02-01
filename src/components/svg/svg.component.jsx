function SVG({ path, ...rest }) {
  return <svg {...rest}>{path}</svg>;
}

export default SVG;
