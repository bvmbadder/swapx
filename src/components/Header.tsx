import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
interface Header {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
}
const Header = ({ onClick }: Header) => {
  return (
    <header className="css-yesj0r">
      <div className="css-3jm7jv">
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
            className="chakra-button css-vpc648 border border-green-500"
            onClick={() => onClick(true)}
          >
            Connect
          </button>
          <button type="button" className="chakra-button css-1d6lhti">
            <div className="icon-back css-0">
              <div className="flex items-center justify-center absolute transition-opacity duration-300 css-whh5e5">
                <svg
                  viewBox="0 0 10 12"
                  focusable="false"
                  className="chakra-icon css-z56who"
                >
                  <path
                    d="M5.93471 12C2.65893 11.9965 0.00456634 9.31384 0.00108962 6.00365C-0.0747031 1.52839 4.96099 -1.48431 8.79814 0.76128L9.56604 1.19204L8.80301 1.63169C5.49015 3.47464 5.73236 8.56242 9.19866 10.0795L10.0002 10.4447L9.27469 10.9474C8.29239 11.6318 7.12769 11.9986 5.93448 11.9998L5.93471 12Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </button>
          <button
            type="button"
            className="chakra-button css-pgso76"
            aria-label="Menu"
            id="popover-trigger-:r24:"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="popover-content-:r24:"
          >
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              className="chakra-icon css-15qqx0c"
              aria-hidden="true"
            >
              <path
                d="M7.93994 0H3.01001C2.21095 0.00317281 1.44568 0.322688 0.881592 0.888647C0.317507 1.45461 0.000522532 2.22094 0 3.02V7.95C0.00079422 8.74806 0.318256 9.5132 0.882568 10.0775C1.44688 10.6418 2.21195 10.9592 3.01001 10.96H7.93994C8.738 10.9592 9.50331 10.6418 10.0676 10.0775C10.6319 9.5132 10.9492 8.74806 10.95 7.95V3.02C10.9494 2.22094 10.6324 1.45461 10.0684 0.888647C9.50427 0.322688 8.739 0.00317281 7.93994 0ZM9.48999 7.95C9.48789 8.36044 9.32392 8.75347 9.03369 9.04369C8.74346 9.33392 8.35038 9.4979 7.93994 9.5H3.01001C2.59901 9.49973 2.20493 9.33635 1.91431 9.04572C1.62368 8.7551 1.46023 8.361 1.45996 7.95V3.02C1.4593 2.81627 1.499 2.61441 1.57666 2.42606C1.65432 2.23771 1.76854 2.06657 1.9126 1.92251C2.05666 1.77845 2.22766 1.6643 2.41602 1.58664C2.60437 1.50898 2.80628 1.46934 3.01001 1.47H7.93994C8.35095 1.47027 8.74502 1.63365 9.03564 1.92428C9.32627 2.2149 9.48973 2.609 9.48999 3.02V7.95Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
