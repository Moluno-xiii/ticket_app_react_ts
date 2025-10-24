import type { ComponentProps } from "react";
import type { IconType } from "react-icons";
import Icon from "./Icon";

interface Props extends ComponentProps<"button"> {
  title: string;
  iconColor?: string;
  variant?: "error" | "default";
  icon?: IconType;
}

const Button: React.FC<Props> = ({
  title,
  iconColor,
  variant,
  icon: IconComponent,
  ...rest
}) => {
  return (
    <button
      className={`${
        !IconComponent
          ? "bg-primary text-white hover:bg-primary/80"
          : `text-red-600 `
      } px-4 py-2 rounded-lg flex flex-row items-center justify-center gap-4   transition-all duration-300 cursor-pointer ${
        variant === "error" && "bg-red-600 hover:bg-red-600/50"
      }`}
      {...rest}
    >
      {title}
      {IconComponent && <Icon icon={IconComponent} color={iconColor} />}
    </button>
  );
};

export default Button;
