import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { IoClose, IoMenu } from 'react-icons/io5';
import { useState } from 'react';
interface Header {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header = ({ onClick }: Header) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className=" css-yesj0r">
      <div className="relative css-3jm7jv">
        <div className="css-rvp98e">
          <a href="/">
            <img src={logo} alt="Logo" className="css-x5cgkf" />
          </a>

          {/* Navigation Links */}
          <ul className="css-1hqftv7">
            <a href="/" className="chakra-link css-1jcrmdz">
              Swap
            </a>
            <a href="/" className="chakra-link css-1jcrmdz">
              Earn
            </a>
            <a href="/" className="chakra-link css-1jcrmdz">
              Voting
            </a>
            <a href="/" className="chakra-link css-1jcrmdz">
              xNFT
            </a>
            <Link to="functionalities" className="chakra-link css-1jcrmdz">
              Functionalities
            </Link>
          </ul>
        </div>

        {/* Right Section (Prices, Buttons, etc.) */}
        <div className="chakra-stack css-1igwmid">
          <div className="chakra-stack css-dten7i">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="9" cy="9" r="9" fill="#2B2B2B" />
              <path
                d="M13.8518 9.94061L12.2777 7.92555C12.6714 7.42188 13.0647 6.9182 13.4584 6.44817C13.8193 5.97815 14.1801 5.54141 14.5409 5.07139L15 4.50041H12.0809C11.8891 4.49526 11.699 4.53852 11.5274 4.62636C11.3558 4.71419 11.208 4.84392 11.097 5.00409C10.8347 5.37352 10.5722 5.70931 10.2771 6.07874C10.146 6.24663 10.0474 6.38087 9.91624 6.54877L9.75226 6.75031L9.91624 6.95185C10.2442 7.38823 10.5735 7.79131 10.9001 8.22698L11.4907 8.9995C11.261 9.30163 11.0316 9.60412 10.769 9.90626L10.605 10.1078L10.769 10.3093C10.8347 10.3766 10.8673 10.4436 10.933 10.5109C11.0853 10.693 11.2276 10.8836 11.3592 11.0819C11.4167 11.1691 11.4952 11.2397 11.5871 11.2867C11.6791 11.3338 11.7814 11.3557 11.884 11.3503H14.8685L14.4423 10.813L13.8518 9.94061ZM7.42332 4.80255C7.36151 4.71166 7.27745 4.63901 7.17957 4.59189C7.08169 4.54477 6.97343 4.52482 6.86564 4.53406H3.75L4.17621 5.10504C4.70102 5.77554 5.22583 6.44853 5.75064 7.08609C6.24258 7.72366 6.76739 8.36122 7.25933 8.99879C6.24258 10.3093 5.22583 11.6181 4.17621 12.9613L3.75 13.5H6.83312C6.93939 13.4985 7.04411 13.4737 7.14028 13.4274C7.23645 13.3811 7.32186 13.3143 7.39079 13.2315L7.42366 13.1979C8.40755 11.9227 9.4243 10.6122 10.4411 9.33705C10.5296 9.23537 10.5786 9.10387 10.5786 8.96762C10.5786 8.83137 10.5296 8.69987 10.4411 8.59819C9.29284 7.25398 8.34182 5.97779 7.42332 4.80255Z"
                fill="#7AF182"
              />
            </svg>
            <p className="chakra-text css-1tiax7u">$0.63</p>
          </div>
          <div className="chakra-stack css-dten7i">
            <img
              src="https://swapx.fi/assets/ws-7258b40b.svg"
              width="20"
              height="20"
              alt="WS"
            />
            <p className="chakra-text css-1tiax7u">$0.67</p>
          </div>
          <button
            className="hidden md:block"
            id="popover-trigger-:r1u:"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="popover-content-:r1u:"
          >
            <img
              className="chakra-image css-x3wokz"
              src="https://swapx.fi/assets/sonic-e8bf8e8c.svg"
              alt="Sonic"
            />
          </button>
          <button
            type="button"
            className="chakra-button bg-green-400/25 rounded-full px-2 p-1 border border-green-500 hidden lg:block"
            onClick={() => onClick(true)}
          >
            Connect
          </button>
          <div className="block lg:hidden">
            {isActive ? (
              <IoClose onClick={() => setIsActive(!isActive)} />
            ) : (
              <IoMenu onClick={() => setIsActive(!isActive)} />
            )}
          </div>
          {isActive && (
            <div className="mt-[300px] flex lg:hidden bg-[#252b28] w-full fixed left-0 right-0 ">
              <ul className="flex flex-col p-4 w-full">
                <a href="/" className="chakra-link css-1jcrmdz">
                  Swap
                </a>
                <a href="/" className="chakra-link css-1jcrmdz">
                  Earn
                </a>
                <a href="/" className="chakra-link css-1jcrmdz">
                  Voting
                </a>
                <a href="/" className="chakra-link css-1jcrmdz">
                  xNFT
                </a>
                <Link to="functionalities" className="chakra-link css-1jcrmdz">
                  Functionalities
                </Link>
                <button
                  type="button"
                  className="chakra-button w-full mt-5 rounded-full text-white bg-green-400/25 border border-green-500"
                  onClick={() => onClick(true)}
                >
                  Connect
                </button>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
