import { FcMenu } from "react-icons/fc";
import { Link } from "react-router-dom";
import { PiDevicesFill } from "react-icons/pi";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center p-4">
      {/* <FcReadingEbook className="text-4xl"/> */}
      <Link to="/">
        <PiDevicesFill className="text-4xl text-[#1e1a4f]"/>
      {/* <img src="/images/logoweb.png" alt="" className="w-[32px]" /> */}
      </Link>
      <FcMenu className="text-2xl cursor-pointer"/>
    </div>
  );
};

export default Header;
