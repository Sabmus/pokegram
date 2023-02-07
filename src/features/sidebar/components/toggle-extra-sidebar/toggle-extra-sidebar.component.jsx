function ToggleExtraSidebar({ onToggle, children }) {
  return <div onClick={onToggle}>{children}</div>;
}

export default ToggleExtraSidebar;
