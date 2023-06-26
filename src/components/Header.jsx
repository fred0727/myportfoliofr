import { FcMenu } from "react-icons/fc";
import { Link } from "react-router-dom";
import { PiDevicesFill } from "react-icons/pi";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center p-4">
      <Link to="/">
        <PiDevicesFill className="text-4xl text-[#1e1a4f] xxs:text-5xl"/>
      </Link>
      <FcMenu className="text-2xl cursor-pointer xxs:text-4xl"/>
    </div>
  );
};

export default Header;
