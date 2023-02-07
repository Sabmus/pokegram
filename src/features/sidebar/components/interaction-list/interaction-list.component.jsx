import Interaction from "../interaction/interaction.component";

function InteractionList({ actionList, onToggleExtraSidebar }) {
  const actions = actionList.map((action) => (
    <Interaction
      key={action.title}
      action={action}
      onToggleExtraSidebar={onToggleExtraSidebar}
    />
  ));

  return actions;
}

export default InteractionList;
