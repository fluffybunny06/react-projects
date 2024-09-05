import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEdit() {
    setIsEditing(true);
  }

  let content;

  if (!isEditing) {
    content = <span className="player-name">{name}</span>;
  } else content = <input type="text" name="name" />;

  return (
    <li>
      <span className="player">
        {content}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>Edit</button>
    </li>
  );
}
