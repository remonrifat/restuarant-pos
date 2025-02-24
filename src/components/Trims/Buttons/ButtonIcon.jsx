/* eslint-disable react/prop-types */

import { useState } from "react";

const ButtonIcon = ({
  onclick,
  text = "Button",
  bg = "bg-primary-500",
  icon,
  fronticon,
  ifhovered,
  ifnothovered
}) => {
  const [hovered, setHovered] = useState(false);
  // const navigate = useNavigate();
  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={` px-5 py-3 rounded-full mx-1 flex items-center gap-2 ${bg} ${hovered ? ifhovered : ifnothovered}`}
      onClick={onclick}
    >
      <span>{fronticon}</span>
      {text}
      <span>{icon}</span>
    </button>
  );
};

export default ButtonIcon;
