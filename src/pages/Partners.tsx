import React, { useRef } from "react";

interface Partner {
  name: string;
  logo: string;
  description: string;
  link: string;
}

const partners: Partner[] = [
  {
    name: "Algebra",
    logo: "https://swapx.fi/strategic-partners/algebra-logo.svg",
    description:
      "Powered by Algebra Integral V4, SwapX leverages advanced AMM technology known for its modular design, dynamic fee structures, and exceptional gas efficiency. This integration enhances liquidity management, reduces transaction costs by up to 78%, and ensures seamless upgrades to meet evolving market demands.",
    link: "https://algebra.finance/",
  },
  {
    name: "ICHI",
    logo: "https://swapx.fi/strategic-partners/ichi-logo.svg",
    description:
      "SwapX collaborates with ICHI to redefine liquidity management with sustainable and efficient solutions. ICHI’s innovative tools empower users with single-token deposit simplicity, dynamic token allocation, and continuous optimization of liquidity pools.",
    link: "https://www.ichi.org/",
  },
  {
    name: "Sonic",
    logo: "https://swapx.fi/strategic-partners/sonic-logo.svg",
    description:
      "Sonic is an EVM layer-1 blockchain platform that offers developers attractive incentives and powerful infrastructure. It supports over 10,000 transactions per second with sub-second confirmation times and provides a secure gateway to Ethereum for enhanced liquidity and asset security.",
    link: "https://www.soniclabs.com/",
  },
  {
    name: "BailSec",
    logo: "https://swapx.fi/strategic-partners/bailsec-logo.svg",
    description:
      "BailSec is a leading smart contract audit firm known for its meticulous approach to securing decentralized platforms. Their expertise ensures SwapX operates in a safe and reliable environment, leveraging advanced vulnerability detection, thorough testing, and ongoing risk management.",
    link: "https://bailsec.io/",
  },
];

const StrategicPartners: React.FC = () => {
  const sliderRef = useRef<HTMLUListElement>(null);

  // Function to scroll the slider
  const scrollSlider = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const scrollAmount = 400; // Adjust the scroll amount as per your preference
      if (direction === "left") {
        sliderRef.current.scrollLeft -= scrollAmount;
      } else {
        sliderRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="w-full md:mt-[120px] mt-[80px] css-0">
      <div className="chakra-stack items-center css-tl3ftk">
        <h2 className="chakra-heading css-1lqzns3">
          <div className="md:text-[3rem] text-[2.2rem] text-center css-0">
            Strategic Partners
          </div>
        </h2>
        <div className="text-center mt-3 text-lg w-full max-w-[1000px] css-0">
          Our strategic partnerships elevate the SwapX ecosystem by integrating
          the most advanced technologies and expert solutions. These
          collaborations enhance security, liquidity, and overall functionality,
          reinforcing our commitment to delivering a seamless and secure DeFi
          experience.
        </div>
      </div>

      <div className="md:mt-[80px] mt-[50px] sm:mx-[40px] css-l7km55 relative">
        {/* Left Arrow Button */}
        <button
          className="absolute left-0 rounded-full top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2"
          onClick={() => scrollSlider("left")}
        >
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Slider Content */}
        <div className="react-multi-carousel-list" dir="ltr">
          <ul
            ref={sliderRef}
            className="react-multi-carousel-track"
            style={{
              transition: "none",
              overflowX: "auto",
              listStyleType: "none",
              padding: 0,
              display: "flex",
            }}
          >
            {partners.map((partner, index) => (
              <li
                key={index}
                className="react-multi-carousel-item react-multi-carousel-item--active"
                style={{
                  flex: "0 0 auto",
                  width: "391px",
                }}
              >
                <div className="md:mx-3 mx-1 h-full max-w-[450px] w-full css-0">
                  <div className="relative h-full select-none css-0">
                    <div className="rounded-[15px] w-[90px] h-[88px] absolute flex items-center justify-center top-[5px] left-[5px] css-144psxq">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-[60px] h-[60px]"
                        draggable="false"
                      />
                    </div>
                    <div className="h-full css-c25mco">
                      <div className="sm:pt-[35px] pt-[40px] pb-[100px] px-7 h-full css-trp7nv">
                        <div className="pl-[100px] max-w-full css-0">
                          <h2 className="chakra-heading css-say2tq">
                            <div className="lg:text-[2.2rem] sm:text-[2rem] text-[1.8rem] css-0">
                              {partner.name}
                            </div>
                          </h2>
                        </div>
                        <div className="mt-[45px] text-[1.1rem] css-0">
                          {partner.description}
                        </div>
                      </div>
                    </div>
                    <div className="absolute css-g1qqge">
                      <a
                        href={partner.link}
                        className="flex items-center justify-between gap-2 w-full whitespace-nowrap"
                      >
                        <div className="duration-100 sm:text-[1rem] text-sm css-0">
                          Learn More
                        </div>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="1"
                          viewBox="0 0 24 24"
                          className="chakra-icon css-fyoinq"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M15.5 2.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V4.06l-6.22 6.22a.75.75 0 1 1-1.06-1.06L19.94 3h-3.69a.75.75 0 0 1-.75-.75Z"></path>
                          <path d="M2.5 4.25c0-.966.784-1.75 1.75-1.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.25.25 0 0 0-.25.25v15.5c0 .138.112.25.25.25h15.5a.25.25 0 0 0 .25-.25v-8.5a.75.75 0 0 1 1.5 0v8.5a1.75 1.75 0 0 1-1.75 1.75H4.25a1.75 1.75 0 0 1-1.75-1.75V4.25Z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Arrow Button */}
        <button
          className="absolute right-0 rounded-full top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 text-white p-2"
          onClick={() => scrollSlider("right")}
        >
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default StrategicPartners;
