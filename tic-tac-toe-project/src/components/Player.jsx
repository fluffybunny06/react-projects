import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing(!isEditing);
  }

  let playerName = <span className="player-name">{name}</span>;
  let button = "Edit";

  if (isEditing) {
    playerName = <input type="text" name="name" required value={name} />;
    button = "Save";
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{button}</button>
    </li>
  );
}
