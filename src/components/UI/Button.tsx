import type { ComponentProps } from "react";

interface Props extends ComponentProps<"button"> {
  title: string;
  variant?: "error" | "default";
}

const Button: React.FC<Props> = ({ title, variant, ...rest }) => {
  return (
    <button
      className={`bg-primary px-4 py-2 rounded-lg text-white hover:bg-primary/80 transition-all duration-300 cursor-pointer ${
        variant === "error" && "bg-red-600 hover:bg-red-600/50"
      }`}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
