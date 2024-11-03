interface HeaderButtonProps {
  title: string;
  reference: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ title, reference }) => {
  return (
    <div className="w-36 text-[#ffffff] hover:text-blue-200 hover:cursor-pointer flex items-center text-shadow-textr">
      <a href={`#${reference}`}>{title}</a>
    </div>
  );
};

export default HeaderButton;
