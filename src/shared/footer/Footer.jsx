import { FaFacebook } from "react-icons/fa";
import { FaTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <aside>
        <img className="" src="./SEALogo.png" alt="SEAventure's logo" />
        <p>
        SEAventure
          <br />
          Providing reliable tourism since 1992
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <Link><FaTwitter></FaTwitter></Link>
          <Link><FaYoutube /></Link>
          <Link><FaFacebook /></Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
