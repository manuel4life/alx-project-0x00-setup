import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles = {} }) => {
  const baseClasses = "px-4 py-2 bg-blue-500 text-white";

  const sizeClasses = {
    small: "text-sm py-1 px-3",
    medium: "text-base py-2 px-4",
    large: "text-lg py-3 px-6",
  };

  const shapeClasses = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  };

  const size = styles.size || "medium";
  const shape = styles.shape || "rounded-md";

  const buttonClasses = `
    ${baseClasses}
    ${sizeClasses[size]}
    ${shapeClasses[shape]}
  `;

  return <button className={buttonClasses}>{title}</button>;
};

export default Button;
