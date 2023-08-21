import Image from "next/image";
import MainLogo from "../../../public/mainlogo.png";

const Footer = () => {
  return (
    // <footer className="h-[18vh] bg-primary flex flex-col items-center justify-center text-white">
    //   <Image src={MainLogo} width={40} height={40} alt="main logo" />
    //   <h1 className="font-bold">REBOOK</h1>
    //   <p className="flex justify-between">Created by Jeonggu Kang</p>
    // </footer>
    <footer className="h-[18vh] border-t-2 border-primary flex flex-col items-center justify-center">
      <Image src={MainLogo} width={40} height={40} alt="main logo" />
      <h1 className="font-bold">REBOOK</h1>
      <p className="flex justify-between">Created by Jeonggu Kang</p>
    </footer>
  );
};
export default Footer;
