import { FaFacebook } from "react-icons/fa";
import { FaTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";


const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 ">
      <aside>
        <img className="max-w-24" src="https://imgur.com/I8Sbu5a.png" alt="" />
        <p className="font-bold">
          SEAventures <br />
          Providing reliable tourism since 1992
        </p>
        <p>Copyright © 2024 - All right reserved</p>
        <p className="flex items-center gap-2"><span><MdEmail className="text-2xl" /></span>seaventure@demo.com</p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <Link>
            <FaFacebook />
          </Link>
          <Link>
            <FaTwitter />
          </Link>
          <Link>
            <FaYoutube />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
