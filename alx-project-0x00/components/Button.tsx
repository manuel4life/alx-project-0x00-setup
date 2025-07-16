import { ButtonProps } from "@/interfaces";
const Button: React.FC<ButtonProps> = ({ size, shape }) => {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };
  return (
    <button className={`bg-[#34967C] ${shape} ${sizeClasses[size]} text-white`}>
      {" "}
      Click me
    </button>
  );
};

export default Button;
