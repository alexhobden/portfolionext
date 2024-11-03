interface ProfileProps {
  children?: React.ReactNode;
}

const Frame: React.FC<ProfileProps> = ({ children }) => {
  return (
    <div className="w-[70%] flex justify-end rounded-[5rem] shadow-innerboxglow p-4 border-white border-2 md:top-4 md:right-[15vw]">
      {children}
    </div>
  );
};
export default Frame;
