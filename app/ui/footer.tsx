import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="flex justify-center font-inria gap-10 mt-16 items-center w-full h-24 bg-black/50 backdrop-blur-md text-white">
      <p>© 2024 Alex Hobden</p>
      <Link className="hover:underline" href={"/LegalNotice"}>
        Legal Notice
      </Link>
      <Link className="hover:underline" href={"/PrivacyPolicy"}>
        Pricacy Policy
      </Link>
    </div>
  );
};
export default Footer;
