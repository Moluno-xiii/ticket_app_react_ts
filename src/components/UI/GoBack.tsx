import type { ComponentProps } from "react";
import type { IconType } from "react-icons";
import Icon from "../../components/UI/Icon";
import { useRouter } from "@tanstack/react-router";
import { IoArrowBackOutline } from "react-icons/io5";

interface Props extends ComponentProps<"button"> {
  color?: string;
  icon?: IconType;
  additionalStyles?: string;
}

const GoBack = ({
  color = "var(--color-primary)",
  icon = IoArrowBackOutline,
  additionalStyles,
  ...rest
}: Props) => {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.history.back()}
      className={`${additionalStyles} w-fit transition-all duration-200 cursor-pointer flex flex-row gap-x-3 items-center `}
      {...rest}
    >
      <Icon icon={icon} color={color} />
      <p style={{ color }}>Go Back</p>
    </button>
  );
};

export default GoBack;
