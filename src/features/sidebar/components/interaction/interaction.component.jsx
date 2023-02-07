import { Link } from "react-router-dom";

import ToggleExtraSidebar from "../toggle-extra-sidebar/toggle-extra-sidebar.component";
import ToggleModal from "../toggle-modal/toggle-modal.component";

import { InteractionDiv } from "./interaction.styles";

function Interaction({ action, onToggleExtraSidebar }) {
  if (action.isLink) {
    return (
      <Link to={action.path}>
        <InteractionDiv>{action.title}</InteractionDiv>
      </Link>
    );
  }

  if (action.isToggleExtraSidebar) {
    return (
      <ToggleExtraSidebar
        action={action}
        onToggleExtraSidebar={onToggleExtraSidebar}
      >
        <InteractionDiv>{action.title}</InteractionDiv>
      </ToggleExtraSidebar>
    );
  }

  if (action.isModal) {
    <InteractionDiv>
      <ToggleModal />
    </InteractionDiv>;
  }
}

export default Interaction;
