function ToggleExtraSidebar({ action, onToggleExtraSidebar, children }) {
  const handleOnToggleClick = () => {
    onToggleExtraSidebar(action.title);
  };

  return <div onClick={handleOnToggleClick}>{children}</div>;
}

export default ToggleExtraSidebar;
