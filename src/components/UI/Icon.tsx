import type { ComponentProps } from "react";
import type { IconType } from "react-icons";

interface IconProps extends ComponentProps<"button"> {
  icon: IconType;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ icon: IconDisplay, color }) => {
  return (
    <button style={{ color: color }} className={`text-primary cursor-pointer`}>
      {<IconDisplay size={24} />}
    </button>
  );
};

export default Icon;
