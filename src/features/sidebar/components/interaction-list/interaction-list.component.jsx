import Interaction from "../interaction/interaction.component";

function InteractionList({
  actionList,
  onToggleSearch,
  onToggleNotifications,
}) {
  const actions = actionList.map((action) => (
    <Interaction
      key={action.title}
      action={action}
      onToggleSearch={onToggleSearch}
      onToggleNotifications={onToggleNotifications}
    />
  ));

  return <div>{actions}</div>;
}

export default InteractionList;
