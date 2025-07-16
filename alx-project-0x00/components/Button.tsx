import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, styles = "" }) => {
  return (
    <button className={`bg-[#34967C] text-white ${styles}`}>{title}</button>
  );
};

export default Button;
