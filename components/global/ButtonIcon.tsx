type ButtonIconProps = {
  title: string;
  iconClass: string;
  color: string;
  sizeText: string;
  onAction: () => void | any;
};

const ButtonIcon = ({ title, color, iconClass, sizeText, onAction }: ButtonIconProps) => {
  return (
    <button onClick={onAction} className={`flex items-center gap-x-2 ${sizeText} font-medium ${color}`}>
      <i className={`${iconClass} text-lg`}></i>
      {title}
    </button>
  );
};

export default ButtonIcon;
